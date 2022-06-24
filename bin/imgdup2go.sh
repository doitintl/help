#!/bin/sh -e

# Wrap the `imgdup2go` command to cache results
# =============================================================================

# Usage: ./bin/imgdup2go.sh ASSETS_DIR

# POSIX locale
LC_ALL=C
export LC_ALL

# ANSI formatting
RED='\x1b[1;31m'
RESET='\x1b[0m'

IMGDUP2GO_IGNORE=.imgdupignore
IMGDUP2GO_DIR=imgdup2go
IMGDUP2GO_TGZ="${IMGDUP2GO_DIR}.tar.gz"
LOCK_DIR=.docops/lock
IMGDUP2GO_LOCK="${LOCK_DIR}/${IMGDUP2GO_DIR}"

(
    # Restore lock files
    cd "${LOCK_DIR}"
    if test -f "${IMGDUP2GO_TGZ}"; then
        rm -rf "${IMGDUP2GO_DIR}"
        tar -xzf "${IMGDUP2GO_TGZ}"
        rm -f "${IMGDUP2GO_TGZ}"
    else
        mkdir -p "${IMGDUP2GO_DIR}"
    fi
)

recompress() {
    # Recompress the lock files
    cd "${LOCK_DIR}"
    rm -f "${IMGDUP2GO_TGZ}"
    if test -d "${IMGDUP2GO_DIR}"; then
        tar -czf "${IMGDUP2GO_TGZ}" "${IMGDUP2GO_DIR}"
    fi
    rm -rf "${IMGDUP2GO_DIR}"
}

trap recompress EXIT

ASSETS_SIG="${IMGDUP2GO_LOCK}/assets.md5sum"
ASSETS_OUT="${IMGDUP2GO_LOCK}/assets.out"

handle_exit() {
    # Post-process errors
    if test -s "${ASSETS_OUT}"; then
        sed -E "s,^(.*),${RED}\1${RESET}," <"${ASSETS_OUT}"
        rm -f "${ASSETS_OUT}"
        rm -f "${ASSETS_SIG}.tmp"
        exit 1
    fi
    rm -f "${ASSETS_OUT}"
    # Move the new signature file into place
    mv "${ASSETS_SIG}.tmp" "${ASSETS_SIG}"
    exit 0
}

# Reuse the output cache if the signatures match
fdfind --hidden --ignore-case --type f --print0 |
    xargs -0 md5sum \
        >"${ASSETS_SIG}.tmp"
if cmp "${ASSETS_SIG}.tmp" "${ASSETS_SIG}" >/dev/null 2>&1; then
    handle_exit
fi

# Wipe the old signature file to prevent caching
echo >"${ASSETS_SIG}"

echo 'Processing images...'

# Generate the output cache
imgdup2go -dryrun -algo diff -path . 2>/dev/null |
    grep -vf "${IMGDUP2GO_IGNORE}" |
    grep 'matches' |
    sed -E 's,.* imgdup2go.go:[0-9]+: ,,' \
        >"${ASSETS_OUT}"

handle_exit
