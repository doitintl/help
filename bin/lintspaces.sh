#!/bin/sh -e

# Wrap the `lintspaces` command to provide extended configuration
# =============================================================================

# Usage: ./bin/lintspaces.sh

# https://github.com/schorfES/node-lintspaces

fdfind -H -t f '\.[^p][^y][^.]?$' |
    xargs -0 lintspaces \
        --editorconfig .editorconfig \
        --guessindentation \
        --matchdotfiles \
        --maxnewlines 1
