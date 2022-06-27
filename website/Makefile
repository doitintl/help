# =============================================================================
# Docusaurus build
# =============================================================================

.EXPORT_ALL_VARIABLES:

# POSIX locale
LC_ALL = C

.DEFAULT_GOAL = help

TOP_DIR = $(patsubst %/,%,$(dir $(lastword $(MAKEFILE_LIST))))
BIN_DIR = $(TOP_DIR)/bin

# Setup
# =============================================================================

# The webpack image loader consumes a lot of memory while generating image
# variants in the `build/assets/ideal-img` directory. If we don't cap memory
# usage, running `yarn build` can fail on smaller systems by exhausting all
# available system memory.

# Get total system memory in megabytes
SYSTEM_MEM=$(shell free -m | grep 'Mem' | awk '{print $$2}')

$(info Available system memory: $(SYSTEM_MEM) MB)

# Set memory percentage
# https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes
SYSTEM_PCT=0.75

# Calculate a safe heap size
NODE_MEM=$(shell python3 -c 'print(round($(SYSTEM_MEM) * $(SYSTEM_PCT)))')

# Export for all child processes
NODE_OPTIONS="--max-old-space-size=$(NODE_MEM)"

# Print outcome
$(info Set V8 heap size: $(NODE_MEM) MB)

# Targets
# =============================================================================

.PHONY: help
help:
	@ printf '%s\n\n' "Usage: make [target]"
	@ printf '%s\n\n' 'Available targets:'
	@ grep -E '^.PHONY: [a-z]+ #' Makefile | \
		sed -E 's,^.PHONY: ([a-z]+) # (.*),\1#\2,' | \
		column -s '#' -t | \
		sed -E "s,^([a-z]+),  \1,"

# TODO: https://classic.yarnpkg.com/en/docs/cli/

.PHONY: install # Install the project dependencies
install:
	yarn install

ifeq ($(TERM_PROGRAM),vscode)
# VS Code will prompt the user to open a browser window
YARN_START_OPTS = --no-open
endif

# Set the URL to mimic the Netlify deployment environment
.PHONY: start # Start the development server
start: install
	yarn start $(YARN_START_OPTS)

.PHONY: _pre-build
_pre-build: install
	$(BIN_DIR)/make-headers.sh
	$(BIN_DIR)/make-redirects.sh

.PHONY: _build
_build: _pre-build
	nice -n 19 yarn build

.PHONY: _post-build
_post-build: _build
	nice -n 19 $(BIN_DIR)/optimize-build.sh

.PHONY: build # Bundle the website into static files for production
build: _post-build

.PHONY: serve # Serve the built website locally
serve: install
	yarn serve $(YARN_START_OPTS)

.PHONY: deploy # Publish the website to GitHub pages
deploy: install
	yarn deploy

.PHONY: clean # Remove build artifacts
clean:
	@ $(MAKE) -f ../Makefile $@
