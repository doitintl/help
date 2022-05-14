#!/bin/sh -e

# Wrap the `eslint` command
# =============================================================================

# Usage: ./bin/eslint.sh

# https://eslint.org/
# https://github.com/mdx-js/eslint-mdx

# https://github.com/prettier/prettier-eslint-cli

# POSIX locale
LC_ALL=C
export LC_ALL

# Stock functionality
# -----------------------------------------------------------------------------

# TODO: Implement `eslint` check (waiting for devcontainer update)

find_mdx_files() {
    fdfind -H -t f '\.mdx$' --print0
}

# Augment the stock functionality with additional checks
# -----------------------------------------------------------------------------

# Check for disallowed patterns
check() {
    pattern="${1}"
    if (find_mdx_files | xargs -0 grep --color=always -P "${pattern}"); then
        return 1
    else
        return 0
    fi
}

# Catch relative links that do not use a file extension
check '\[[^\]]+\]\((?!(#|[a-z]+://))(.|..)?[^.)]+(?!\.mdx)\)'
