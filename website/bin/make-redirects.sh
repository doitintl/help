#!/bin/sh -e

# Make the `_redirects` file for Netlify
# =============================================================================

# Usage: ./bin/create-redirects.sh

cat redirects/zendesk.txt \
    redirects/gitbook.txt \
    redirects/docusaurus.txt \
    redirects/misc.txt |
    grep -E '^/' |
    sed -E 's, +, ,g' \
        >static/_redirects
