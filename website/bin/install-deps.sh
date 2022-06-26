#!/bin/sh -e

# Temporary installs that doesn't require superuser privileges
# =============================================================================

UBUNTU_UNIVERSE=http://archive.ubuntu.com/ubuntu/pool/universe
PNGQUANT_DEB="${UBUNTU_UNIVERSE}/p/pngquant/pngquant_2.12.2-1_amd64.deb"

LAUNCHPAD=http://launchpadlibrarian.net
CPULIMIT_DEB="${LAUNCHPAD}/176310483/cpulimit_2.2-1_amd64.deb"

TMP_DEPS_DIR="${TMP_DEPS_DIR:=tmp-deps}"

rm -rf "${TMP_DEPS_DIR}"
mkdir -p "${TMP_DEPS_DIR}"

(
    cd "${TMP_DEPS_DIR}"
    echo "Making a temporary pngquant installation..."
    wget "${PNGQUANT_DEB}"
    dpkg-deb -x pngquant* .
    echo "Making a temporary cpulimit installation..."
    wget "${CPULIMIT_DEB}"
    dpkg-deb -x cpulimit* .
)

PATH="${TMP_DEPS_DIR}/usr/bin:${PATH}"
export PATH
