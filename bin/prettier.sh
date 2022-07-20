#!/bin/sh -e

# Wrap the `prettier` command to provide configuration
# =============================================================================

# Usage: ./bin/prettier.sh [-d|--dry-run]

# https://github.com/prettier/prettier

# POSIX locale
LC_ALL=C
export LC_ALL

# ANSI formatting
RED='\x1b[1;31m'
RESET='\x1b[0m'

dry_run=0
for arg in "$@"; do
    case "${arg}" in
    -d | --dry-run)
        dry_run=1
        shift
        ;;
    -*)
        echo "ERROR: Unknown option: ${arg}"
        exit 1
        ;;
    *) ;;
    esac
done

if test "${dry_run}" = 1; then
    tmp_errors="$(mktemp)"
    if ! prettier --write --ignore-unknown . >"${tmp_errors}" 2>&1; then
        sed -E "s,^(.*),${RED}\1${RESET}," <"${tmp_errors}"
        rm "${tmp_errors}"
        exit 1
    fi
else
    prettier --write --ignore-unknown .
fi
