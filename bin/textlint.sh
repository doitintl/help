#!/bin/sh -e

# Wrap the `textlint` command to provide extended configuration
# =============================================================================

# Usage: ./bin/textlint.sh

# https://github.com/textlint/textlint

# You can disable a rule on a line-by-line basis within a file by using
# comments like this:
#
#   <!-- textlint-disable RULE -->
#   <!-- textlint-enable -->

# POSIX locale
LC_ALL=C
export LC_ALL

dry_run=0
for arg in "$@"; do
    case "${arg}" in
    -d | --dry-run)
        dry_run=1
        shift
        ;;
    -*)
        echo "ERROR: Unknown option: ${arg}"
        exit 1
        ;;
    *) ;;
    esac
done

run_fdfind() {
    fdfind -H -t f --print0 '\.mdx$$'
}

run_textlint() {
    run_fdfind |
        xargs -0 textlint "${@}" \
            --config .textlintrc.yaml
}

if test "${dry_run}" = 1; then
    if ! run_textlint; then
        printf 'For help ignoring errors, see: '
        printf 'https://textlint.github.io/docs/ignore.html\n'
        exit 1
    fi
else
    run_textlint --fix
fi
