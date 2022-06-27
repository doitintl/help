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

(
    # Generate the redirects file in case it does not already exist
    cd website
    ./bin/make-redirects.sh
)

tmp_dir="$(mktemp -d)"

clean() {
    rm -rf "${tmp_dir}"
}

trap clean EXIT

handle_errors() {
    error_message="${1}"
    error_file="${2}"
    # TODO: Find a better way of allowing exceptions to the rule
    sed -i '/brew.pl/d' "${error_file}"
    sed -i '/coffee/d' "${error_file}"
    if ! test -s "${error_file}"; then
        exit 0
    fi
    printf "\e%sERROR: %s\e%s\n\n" "${RED}" "${error_message}" "${RESET}"
    sed -E "s,([^:]+):(.*),\x1b${BLUE}${REDIRECTS_FILE}:\1:\x1b${RESET} \2," \
        <"${error_file}"
    cat "${error_file}"
    exit 1
}

tmp_errors="${tmp_dir}/errors"
if grep -n -E '^ ' "${REDIRECTS_FILE}" >"${tmp_errors}"; then
    print_errors "Leading whitespace" "${tmp_errors}"
    exit 1
fi

# Select the first column (with no filtering, to preserve line numbers)
src_tmp="${tmp_dir}/src"
awk '{print $1}' <"${REDIRECTS_FILE}" >"${src_tmp}"

# Select the second column (with filtering, to match rules)
dest_tmp="${tmp_dir}/dest"
awk '{print $2}' <"${REDIRECTS_FILE}" |
    grep -E '^/' >"${dest_tmp}"

tmp_errors="${tmp_dir}/errors"
if grep -n -F -x -f "${dest_tmp}" "${src_tmp}" >"${tmp_errors}"; then
    handle_errors "Chained redirects" "${tmp_errors}"
fi
