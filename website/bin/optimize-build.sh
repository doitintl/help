#!/bin/sh -e

# Optimize files in the build directory
# =============================================================================

# Usage: ./bin/optimize-build.sh

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

echo "Running pngquant..."
echo "  build/assets"

du -cksh build/assets | head -n1 | awk '{print "    Before: " $1}'

find build/assets -name '*.png' -print0 |
    xargs -0 -n1 pngquant --ext .png --force --strip --quality 70-90

du -cksh build/assets | head -n1 | awk '{print "    After:  " $1}'
