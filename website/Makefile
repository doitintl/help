# =============================================================================
# Docusaurus build
# =============================================================================

.EXPORT_ALL_VARIABLES:

# POSIX locale
LC_ALL = C

BUILD_ERRORS = build.err

.DEFAULT_GOAL = help

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

.PHONY: start # Start the development server
start: install
	yarn start $(YARN_START_OPTS)

.PHONY: build # Bundle the website into static files for production
build: install
	rm -f $(BUILD_ERRORS)
	yarn build 2>$(BUILD_ERRORS)
	sed -i -E '/^($$|[^a-zA-Z])/d' $(BUILD_ERRORS)
	if test -s $(BUILD_ERRORS); then cat $(BUILD_ERRORS); exit 1; fi
	rm -f $(BUILD_ERRORS)

.PHONY: serve # Serve the built website locally
serve: install
	yarn serve

.PHONY: deploy # Publish the website to GitHub pages
deploy: install
	yarn deploy

.PHONY: clean # Remove build artifacts
clean:
	@ $(MAKE) -f ../Makefile $@
