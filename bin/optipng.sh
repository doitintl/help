#!/bin/sh -e

# Wrap the `optipng` command to provide a `--dry-run` option
# =============================================================================

# Usage: ./bin/optipng.sh [-d|--dry-run]

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

OPTIPNG_DIR=optipng
OPTIPNG_TGZ="${OPTIPNG_DIR}.tar.gz"
LOCK_DIR=.docops/lock
OPTIPNG_LOCK_DIR="${LOCK_DIR}/${OPTIPNG_DIR}"

(
    # Restore lock files
    cd "${LOCK_DIR}"
    if test -f "${OPTIPNG_TGZ}"; then
        rm -rf "${OPTIPNG_DIR}"
        tar -xzf "${OPTIPNG_TGZ}"
        rm -f "${OPTIPNG_TGZ}"
    else
        mkdir -p "${OPTIPNG_DIR}"
    fi
)

recompress() (
    # Recompress the lock files
    cd "${LOCK_DIR}"
    rm -f "${OPTIPNG_TGZ}"
    if test -d "${OPTIPNG_DIR}"; then
        tar -czf "${OPTIPNG_TGZ}" "${OPTIPNG_DIR}"
    fi
    rm -rf "${OPTIPNG_DIR}"
)

trap recompress EXIT

tmp_errors="$(mktemp)"
find . -type f -name '*.png' -print |
    grep -vE '(node_modules/|build/)' |
    sort -n |
    while read -r file; do
        sig_file="${OPTIPNG_LOCK_DIR}/${file}.md5sum"
        dirname="$(dirname "${sig_file}")"
        mkdir -p "${dirname}"
        if md5sum --check --quiet "${sig_file}" >/dev/null 2>&1; then
            continue
        fi
        if test "${dry_run}" = 0; then
            echo "Compressing: ${file}"
            optipng -quiet -strip all "${file}"
            md5sum "${file}" >"${sig_file}"
        else
            echo "${file}" >>"${tmp_errors}"
        fi
    done

# Clean the cache
find "${OPTIPNG_LOCK_DIR}" -type f |
    sed "s,^${OPTIPNG_LOCK_DIR}/,," |
    sed 's,\.md5sum$,,' |
    sort -n |
    while read -r file; do
        sig_file="${OPTIPNG_LOCK_DIR}/${file}.md5sum"
        if test ! -f "${file}"; then
            rm -fv "${sig_file}"
        fi
    done
find "${OPTIPNG_LOCK_DIR}" -type d -empty -delete

status_code=0
if test -s "${tmp_errors}"; then
    printf 'Missing or stale lock file for:\n\n'
    sed -E "s,^(.*),${RED}\1${RESET}," <"${tmp_errors}"
    status_code=1
fi
rm -f "${tmp_errors}"
exit "${status_code}"
