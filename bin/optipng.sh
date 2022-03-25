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

DOCS_DIR=gitbook/cmp
ASSETS_DIR=.gitbook/assets

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

OPTIPNG_LOCK_DIR=.docops/lock/optipng

docs_lock_dir="${OPTIPNG_LOCK_DIR}/${DOCS_DIR}"
mkdir -p "${docs_lock_dir}"

tmp_errors="$(mktemp)"
(cd "${DOCS_DIR}/${ASSETS_DIR}" && fdfind --no-ignore '\.png$') |
    while read -r file; do
        basename="$(basename "${file}")"
        sig_file="${docs_lock_dir}/${basename}.md5sum"
        if md5sum --check --quiet "${sig_file}" 2>/dev/null; then
            continue
        fi
        full_filename="${DOCS_DIR}/${ASSETS_DIR}/${file}"
        if test "${dry_run}" = 0; then
            echo "Compressing: ${full_filename}"
            optipng -quiet -strip all "${full_filename}"
            md5sum "${full_filename}" >"${sig_file}"
        else
            echo "${full_filename}" >>"${tmp_errors}"
        fi
    done

# Clean the cache
find "${docs_lock_dir}" -type f | while read -r file; do
    asset_basename="$(basename "${file}" | sed 's,\.md5sum$,,')"
    if test ! -f "./${DOCS_DIR}/${ASSETS_DIR}/${asset_basename}"; then
        rm -v "${file}"
    fi
done

status_code=0
if test -s "${tmp_errors}"; then
    printf 'Missing or stale lock file for:\n\n'
    sed -E "s,^(.*),${RED}\1${RESET}," <"${tmp_errors}"
    status_code=1
fi
rm -f "${tmp_errors}"
exit "${status_code}"
