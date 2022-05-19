#!/bin/sh -e

# Lint the redirects file for chained redirects
# =============================================================================

# Usage: ./bin/redirects-lint.sh

# https://docs.netlify.com/routing/redirects/

# POSIX locale
LC_ALL=C
export LC_ALL

# ANSI formatting
BLUE='[1;34m'
RED='[1;31m'
RESET='[0m'

REDIRECTS_FILE=website/static/_redirects

temp_dir="$(mktemp -d)"

clean() {
    rm -rf "${temp_dir}"
}

trap clean EXIT

print_errors() {
    error_message="${1}"
    error_file="${2}"
    printf "\e%sERROR: %s\e%s\n\n" "${RED}" "${error_message}" "${RESET}"
    sed -E "s,([^:]+):(.*),\x1b${BLUE}${REDIRECTS_FILE}:\1:\x1b${RESET} \2," \
        <"${error_file}"
}

tmp_errors="${temp_dir}/errors"
if grep -n -E '^ ' "${REDIRECTS_FILE}" >"${tmp_errors}"; then
    print_errors "Leading whitespace" "${tmp_errors}"
    exit 1
fi

# Select the first column (with no filtering, to preserve line numbers)
src_tmp="${temp_dir}/src"
awk '{print $1}' <"${REDIRECTS_FILE}" >"${src_tmp}"

# Select the second column (with filtering, to match rules)
dest_tmp="${temp_dir}/dest"
awk '{print $2}' <"${REDIRECTS_FILE}" | grep -E '^/' >"${dest_tmp}"

tmp_errors="${temp_dir}/errors"
if grep -n -F -f "${dest_tmp}" "${src_tmp}" >"${tmp_errors}"; then
    print_errors "Chained redirects" "${tmp_errors}"
    exit 1
fi
