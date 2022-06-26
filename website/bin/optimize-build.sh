#!/bin/sh -e

# Optimize files in the build directory
# =============================================================================

# Usage: ./bin/optimize-build.sh

# Check prerequisites
# -----------------------------------------------------------------------------

IMG_DIR=build/assets/ideal-img

if ! test -d "${IMG_DIR}"; then
    echo "ERROR: Build directory does not exist: ${IMG_DIR}"
    exit 1
fi

# Run pngquant
# -----------------------------------------------------------------------------

# TODO: This whole section has been tuned for the fairly restrictive Netlify
# build containers. After moving our build to GitHub Actions, we should
# reconfigure for optimal performance.

echo "Running pngquant..."

find build/assets/ideal-img -name '*.png' -print0 |
    xargs -0 du -cksh | tail -n1 | awk '{print "  Before: " $1}'

find build/assets/ideal-img -name '*.png' -print0 |
    xargs -0 -n1 -P2 \
        cpulimit -q -l 10 -- pngquant --ext .png --force --strip --speed 10 --quality 85-95

find build/assets/ideal-img -name '*.png' -print0 |
    xargs -0 du -cksh | tail -n1 | awk '{print "  After: " $1}'
