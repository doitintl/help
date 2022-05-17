#!/bin/sh -e

# Wrap the `ec` command
# =============================================================================

# Usage: ./bin/ec.sh

# https://github.com/editorconfig-checker/editorconfig-checker

# POSIX locale
LC_ALL=C
export LC_ALL

fdfind -H -t f --print0 |
    xargs -0 ec
