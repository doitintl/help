# =============================================================================
# Project build
# =============================================================================

.EXPORT_ALL_VARIABLES:

# POSIX locale
LC_ALL = C

# ANSI formatting
BOLD = [1m
RED = [31m
RESET = [0m

TOP_DIR = $(patsubst %/,%,$(dir $(lastword $(MAKEFILE_LIST))))
BIN_DIR = $(TOP_DIR)/bin

# $(call print-target)
define print-target
@ printf "\e$(BOLD)make %s\e$(RESET)\n" "$$(echo $@ | sed 's,.stamp,,')"
endef

# Primary targets
# =============================================================================

.DEFAULT_GOAL = help

.PHONY: help
help:
	@ printf '%s\n\n' "Usage: make [target]"
	@ printf '%s\n\n' 'Available targets:'
	@ grep -E '^.PHONY: [a-z]+ #' Makefile | \
		sed -E 's,^.PHONY: ([a-z]+) # (.*),\1#\2,' | \
		column -s '#' -t | \
		sed -E "s,^([a-z]+),  \1,"

.PHONY: check # Lint the project and test the build
check: lint build

.PHONY: lint # Run all lint checks
lint:

.PHONY: lint-parallel
lint-parallel: # Run all lint checks in parallel
	@ $(MAKE) --no-print-directory -j --output-sync=target lint

.PHONY: start # Start the Docusaurus development server
start:
	$(call print-target)
	@ $(MAKE) -C website start

.PHONY: build # Build the Docusaurus website
check: build
build:
	$(call print-target)
	@ $(MAKE) -C website $@

.PHONY: telemetry # Generate telemetry data
telemetry:

.PHONY: clean # Remove build artifacts
clean:

# Primary prerequisites
# =============================================================================

# check
# -----------------------------------------------------------------------------

only-ascii:
lint: only-ascii

ec:
lint: ec

lintspaces:
lint: lintspaces

prettier:
lint: prettier

yamllint:
lint: yamllint

shellcheck:
lint: shellcheck

shfmt:
lint: shfmt

good-filenames:
lint: good-filenames

rm-unused-docs-dry:
lint: rm-unused-docs-dry

rm-unused-assets-dry:
lint: rm-unused-assets-dry

markdownlint:
lint: markdownlint

html-entities:
lint: html-entities

inline-html:
lint: inline-html

update-vocab-dry:
lint: update-vocab-dry

cspell:
lint: cspell

misspell:
lint: misspell

textlint-dry:
lint: textlint-dry

vale:
lint: vale

markdown-link-check:
lint: markdown-link-check

brok:
lint: brok

fdupes:
lint: fdupes

optipng-dry:
lint: optipng-dry

# telemetry
# -----------------------------------------------------------------------------

telemetry: telemetry-index

telemetry-index: telemetry-assets

# check
# -----------------------------------------------------------------------------

clean: git-clean

# Pattern targets
# =============================================================================

%:
	$(call print-target)
	$(BIN_DIR)/$@.sh

%-dry:
	$(call print-target)
	$(BIN_DIR)/$*.sh --dry-run

# Disabled targets
# =============================================================================

# TODO: Check json keys ordering

# proselintjs
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/sapegin/proselint

# PROSELINTJS = proselintjs --config .proselintrc.json
# FIND_PROSELINTJS =

# all: proselintjs
# .PHONY: proselintjs
# proselintjs:
# 	$(call print-target)
# 	$(FIND) --print0 | xargs -0 $(PROSELINTJS) || true

# imgdup2go
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# IMGDUP2GO := $(BIN_DIR)/imgdup2go.sh

# all: imgdup2go
# .PHONY: imgdup2go
# imgdup2go:
# 	$(call print-target)
# 	$(IMGDUP2GO) $(GITBOOK_CMP_DIR)/$(GITBOOK_ASSETS_DIR)
# 	$(IMGDUP2GO) $(GITBOOK_SUPERQUERY_DIR)/$(GITBOOK_ASSETS_DIR)

# vale.json
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/errata-ai/vale

# TODO: Wrap this into the `vale.sh` script

# VALE_JSON = vale \
# 	--config .vale.ini \
# 	--minAlertLevel suggestion \
# 	--output=JSON \
# 	--no-wrap \
# 	--no-exit

# VALE_JSON_RULE = $(FIND) --mode vale --print0 | xargs -0 $(VALE_JSON) >$@

# $(GH_PAGES_DIR)/index.html: $(GH_PAGES_DIR)/vale.json
# .PHONY: $(GH_PAGES_DIR)/vale.json
# $(GH_PAGES_DIR)/vale.json:
# 	$(call print-target)
# 	@ mkdir -p $(dir $@)
# 	$(VALE_JSON_RULE)
# 	prettier --loglevel silent --write $@
