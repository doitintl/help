#!/bin/sh -e

# Wrap the `cspell` command to provide configuration
# =============================================================================

# Usage: ./bin/cspell.sh

# https://github.com/streetsidesoftware/cspell

# POSIX locale
LC_ALL=C
export LC_ALL

# ANSI formatting
B='\033[1m'
U='\033[4m'
_='\033[0m'

# TODO: Add a help message that says "run ./bin/cspell.sh --tips" and make the
# TODO: tips opt-in

print_tips() {
    echo
    xargs -d '\n' -n 1 echo -e <<EOF
Tips for unknown words:

  - If the word is incorrect, fix it in the source file.

  - If the word is correct, add it to the ${U}./.vocab.txt${_} file.

    When adding words to the vocab file, use the lowercase form, if correct.
    Use uppercase letters when necessary for good style (e.g., proper nouns,
    abbreviations, etc.).

    After modifying the vocab file, sort the contents alphabetically,
    ascending.

Re-run this check to validate your changes:

    $ ${B}make cspell${_}
EOF
    echo
}

tmp_cmd="$(mktemp)"
cat >"${tmp_cmd}" <<EOF
fdfind --hidden --ignore-case --type f --print0 |
    xargs -0 cspell \
        --no-progress \
        --no-summary \
        --config .cspell.json
EOF

tmp_out="$(mktemp)"
# Capture script output and always return true
script -efq "${tmp_out}" --command "$(cat "${tmp_cmd}")" || true

if test -s "${tmp_out}"; then
    print_tips
    exit 1
fi
