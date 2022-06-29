#!/bin/sh -e

# Make the `_headers` file for Netlify
# =============================================================================

# Usage: ./bin/create-headers.sh

cat headers/default.txt \
    >static/_headers
