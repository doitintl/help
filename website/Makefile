# =============================================================================
# Docusaurus build
# =============================================================================

.EXPORT_ALL_VARIABLES:

# POSIX locale
LC_ALL = C

.DEFAULT_GOAL = help

TOP_DIR = $(patsubst %/,%,$(dir $(lastword $(MAKEFILE_LIST))))
BIN_DIR = $(TOP_DIR)/bin

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

.PHONY: pre-build
pre-build:
	$(BIN_DIR)/make-headers.sh
	$(BIN_DIR)/make-redirects.sh

.PHONY: build # Bundle the website into static files for production
build: install
	yarn build

post-build:
	$(BIN_DIR)/optimize-build.sh

.PHONY: serve # Serve the built website locally
serve: install
	yarn serve

.PHONY: deploy # Publish the website to GitHub pages
deploy: install
	yarn deploy

.PHONY: clean # Remove build artifacts
clean:
	@ $(MAKE) -f ../Makefile $@
