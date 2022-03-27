#!/bin/sh -e

# Wrap the `lintspaces` command to provide extended configuration
# =============================================================================

# Usage: ./bin/lintspaces.sh

# https://github.com/schorfES/node-lintspaces

# POSIX locale
LC_ALL=C
export LC_ALL

fdfind -H -t f --print0 |
    xargs -0 lintspaces \
        --editorconfig .editorconfig \
        --matchdotfiles \
        --maxnewlines 1
