#!/bin/sh -e

# Make the `_headers` file for Netlify
# =============================================================================

# Usage: ./bin/create-headers.sh

cat headers/all.txt \
    >static/_headers
