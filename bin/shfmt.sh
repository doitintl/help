#!/bin/sh -e

# Wrap the `shfmt` command to provide configuration
# =============================================================================

# Usage: ./bin/shfmt.sh

# https://github.com/mvdan/sh

# POSIX locale
LC_ALL=C
export LC_ALL

shfmt -d -p -i 4 .
