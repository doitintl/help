#!/bin/sh -e

# Print a cached list of all versionable files
# =============================================================================

# Usage: ./bin/find.sh [OPTIONS] [TARGET_DIR]
#
# Options:
#
#   -b, --binary   Only print binary files
#   -m, --mode     Set the filter mode
#   -i, --invert   Invert the filter mode
#   -e, --exclude  Exclude files matching the filter
#   -0, --print0   Separate file names by NULL bytes instead of newlines

# TODO: Figure out a way to quickly compare hashes of the file system so we
#       know when to update the cache

# TODO: Rework this whole script
# https://github.com/doitintl/doit-composer-airflow-training

# POSIX locale
LC_ALL=C
export LC_ALL

CACHE_DIR=.docops/cache/find

binary=
mode=
invert=
exclude=
null=
for arg in "$@"; do
    case "${arg}" in
    -b | --binary)
        binary=1
        shift
        ;;
    -m | --mode)
        mode="${2}"
        shift
        shift
        ;;
    -i | --invert)
        invert=1
        shift
        ;;
    -E | --exclude)
        exclude="${2}"
        shift
        shift
        ;;
    -0 | --print0)
        null=1
        shift
        ;;
    *) ;;
    esac
done

target_dir="${1:-.}"

cache_key="$(echo "${binary}" | md5sum | cut -d' ' -f1)"
cache_file="${CACHE_DIR}/${cache_key}"

print_cache() {
    cat "${cache_file}"
}

find_sort() {
    find . -type f \
        -not -name '*.svg' \
        -not -name 'gender.txt' \
        -not -path './.docops/lock/*' \
        -not -path './.git/*' \
        -not -exec git check-ignore --quiet {} \; \
        -print | sort -n
}

filter_find() {
    while read -r file; do
        if test "${binary}" = 1; then
            # Print file name if a binary file
            grep -qI . "${file}" || echo "${file}"
        else
            # Print file name if a text file
            grep -qI . "${file}" && echo "${file}"
        fi
    done </dev/stdin
}

if test ! -f "${cache_file}"; then
    mkdir -p "${CACHE_DIR}"
    find_sort | filter_find >"${cache_file}"
fi

# TODO: Improve this function so that TARGET_DIR does not have to start with
#       `./` or end with `/`
filter_dir() {
    grep -E "^${target_dir}" </dev/stdin
}

filter_grep() {
    if test "${invert}" = 1; then
        grep -E -v "${@}"
    else
        grep -E "${@}"
    fi
}

filter_mode() {
    case "${mode}" in
    img)
        filter_grep '\.(png|jpg|jpeg|gif|svg)$' </dev/stdin
        ;;
    png)
        filter_grep '\.png$' </dev/stdin
        ;;
    md)
        filter_grep '\.md$' </dev/stdin
        ;;
    md-pages)
        filter_grep '\.md$' </dev/stdin | grep -E -v 'SUMMARY.md$'
        ;;
    dict-search)
        grep -E -v '\.dict\.txt)$' </dev/stdin
        ;;
    vale)
        grep -E -v '(\.dict\.txt|\.xml)$' </dev/stdin
        ;;
    py)
        filter_grep '\.py$' </dev/stdin
        ;;
    sh)
        filter_grep '\.sh$' </dev/stdin
        ;;
    *)
        cat </dev/stdin
        ;;
    esac
}

filter_exclude() {
    if test -n "${exclude}"; then
        grep -E -v "${exclude}" </dev/stdin
    else
        cat </dev/stdin
    fi
}

filter_null() {
    if test "${null}" = 1; then
        tr '\n' '\0' </dev/stdin
    else
        cat </dev/stdin
    fi
}

print_cache | filter_dir | filter_mode | filter_exclude | filter_null
