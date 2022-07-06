#!/bin/sh -e

# Wrap the `shfmt` command to provide configuration
# =============================================================================

# Usage: ./bin/shfmt.sh

# https://github.com/mvdan/sh

# POSIX locale
LC_ALL=C
export LC_ALL

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

find_sh_files() {
    fdfind -H -t f '\.sh$' --print0
}

if test "${dry_run}" = 0; then
    find_sh_files | xargs -0 shfmt -d -p -i 4 --write
else
    find_sh_files | xargs -0 shfmt -d -p -i 4
fi
