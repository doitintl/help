#!/bin/sh -e

# Wrap the `fdupes` command to ignore paths
# =============================================================================

# Usage: ./bin/fdupes.sh

# POSIX locale
LC_ALL=C
export LC_ALL

# ANSI formatting
RED='\x1b[1;31m'
RESET='\x1b[0m'

tmp_repo_copy="$(mktemp -d)"
rsync -qa . "${tmp_repo_copy}"
git config --add safe.directory "${tmp_repo_copy}"
make --no-print-directory -C "${tmp_repo_copy}" clean >/dev/null

rm -rf "${tmp_repo_copy}/.git"

tmp_errors="$(mktemp)"
fdupes --quiet --recurse --order=name --noempty --sameline "${tmp_repo_copy}" |
    grep -v '_category_.json' |
    grep -v '_headers' |
    grep -v '_redirects' |
    sed "s,${tmp_repo_copy},.,g" |
    sed 's,^,Duplicates: ,' >>"${tmp_errors}"

status_code=0
if test -s "${tmp_errors}"; then
    printf 'Duplicate files:\n\n'
    sed -E "s,^(.*),${RED}\1${RESET}," <"${tmp_errors}"
    status_code=1
fi

rm -rf "${tmp_repo_copy}"
rm -f "${tmp_errors}"

exit "${status_code}"
