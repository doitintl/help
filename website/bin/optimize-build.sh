#!/bin/sh -e

# Optimize files in the build directory
# =============================================================================

# Usage: ./bin/optimize-build.sh

IDEAL_IMG_DIR=build/assets/ideal-img

if ! test -d "${IDEAL_IMG_DIR}"; then
    echo "ERROR: Directory missing: ${IDEAL_IMG_DIR}"
    exit 1
fi

# Temporary install that doesn't require superuser privileges
# -----------------------------------------------------------------------------

UBUNTU_UNIVERSE=http://archive.ubuntu.com/ubuntu/pool/universe
PNGQUANT_DEB="${UBUNTU_UNIVERSE}/p/pngquant/pngquant_2.12.2-1_amd64.deb"

tmp_dir="$(mktemp -d)"

clean() {
    rm -rf "${tmp_dir}"
}

trap clean EXIT

(
    cd "${tmp_dir}"
    echo "Making a temporary pngquant installation..."
    wget "${PNGQUANT_DEB}"
    dpkg-deb -x pngquant* .
)

PATH="${tmp_dir}/usr/bin:${PATH}"

# Run pngquant
# -----------------------------------------------------------------------------

# TODO: This whole section has been tuned for the fairly restrictive Netlify
# build containers. After moving our build to GitHub Actions, we should
# reconfigure for optimal performance.

find_pngs() {
    find "${IDEAL_IMG_DIR}" -name '*.png' -print0
}

total_size() {
    label="${1}"
    xargs -0 du -cksh </dev/stdin |
        tail -n1 | awk '{print "  '"${label}"': " $1}'
}

batch_pngquant() {
    xargs -0 -n4 -P4 \
        pngquant --ext .png --force --strip --speed 6 --quality 85-95 \
        </dev/stdin
}

echo "Running pngquant..."

find_pngs | total_size "Before"

find_pngs | batch_pngquant

find_pngs | total_size "After"
