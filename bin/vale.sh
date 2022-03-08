#!/bin/sh -e

# Wrap the `vale` command to provide configuration
# =============================================================================

# Usage: ./bin/vale.sh

# https://github.com/errata-ai/vale

run_vale() {
    ./bin/find.sh --mode vale --print0 |
        xargs -0 vale \
            --config .vale.ini \
            --minAlertLevel warning \
            --output=.vale/templates/cli.tmpl \
            --no-wrap
}

run_vale
