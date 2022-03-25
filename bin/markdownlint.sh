#!/bin/sh -e

# Wrap the `markdownlint` program to provide additional checks
# =============================================================================

# Usage: ./bin/markdownlint.sh

# TODO: Check the first line (which should always be `---`)

# POSIX locale
LC_ALL=C
export LC_ALL

# Run `markdownlint`
markdownlint .

# Catch additional errors
search() {
    pattern="${1}"
    if (fdfind --hidden --ignore-case --print0 '\.md$' |
        xargs -0 grep --color=always -E "${pattern}"); then
        return 1
    else
        return 0
    fi
}

# Try to catch broken Markdown link syntax while allowing other uses of the
# closing `]` bracket
search '[^0-9]\]\]?)[^\[( :.,]'
