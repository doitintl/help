#!/bin/sh -e

# Wrap the `lintspaces` command to provide extended configuration
# =============================================================================

# Usage: ./bin/lintspaces.sh

# https://github.com/schorfES/node-lintspaces

run_lintspaces() {
    max_newlines="${1}"
    xargs -0 lintspaces \
        --editorconfig .editorconfig \
        --guessindentation \
        --matchdotfiles \
        --maxnewlines "${max_newlines}" \
        </dev/stdin
}

# Python files
./bin/find.sh --mode py | run_lintspaces 2

# All other files
./bin/find.sh --mode py --invert | run_lintspaces 1
