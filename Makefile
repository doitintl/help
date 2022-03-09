# =============================================================================
# Build the project
# =============================================================================

.EXPORT_ALL_VARIABLES:

# POSIX locale
LC_ALL = C

# ANSI formatting
BOLD = [1m
RED = [31m
RESET = [0m

BIN_DIR = ./bin
GH_PAGES_DIR = gh-pages
GITBOOK_ASSETS_DIR = .gitbook/assets
GITBOOK_CMP_DIR = gitbook/cmp
GITBOOK_SUPERQUERY_DIR = gitbook/superquery
CACHE_DIR = .docops/cache
SPHINX_ASSETS_DIR = src/_assets
SPHINX_CMP_DIR = sphinx/cmp
SPHINX_CMP_DOCS_DIR = $(SPHINX_CMP_DIR)/docs
SPHINX_CMP_VENV_DIR = $(SPHINX_CMP_DIR)/.venv

FIND := $(BIN_DIR)/find.sh

# $(call print-target)
define print-target
@ printf "\e$(BOLD)make %s\e$(RESET)\n" "$$(echo $@ | sed 's,.stamp,,')"
endef

# Targets
# =============================================================================

# TODO: Convert all lint checks into scripts and use a single pattern rule to
#       invoke them

# TODO: All targets that call a script multiple times should be simplified so
#       that it can be done by pattern rules

# TODO: Move the lint scripts into a separate directory

# TODO: Now that `find.sh` has been partially refactored, go through each
#       target and test that it still correctly flags errors

.DEFAULT_GOAL = check

# check
# -----------------------------------------------------------------------------

# TODO: Perhaps purge the `find.sh` cache before a run

.PHONY: check
check:

.PHONY: check-parallel
check-parallel:
	@ $(MAKE) --no-print-directory -j --output-sync=target check

# TODO: Check json keys ordering

# only-ascii
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

ONLY_ASCII := $(BIN_DIR)/only-ascii.sh

check: only-ascii
.PHONY: only-ascii
only-ascii:
	$(call print-target)
	$(ONLY_ASCII)

# ec
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/editorconfig-checker/editorconfig-checker

EC := ec

check: ec
.PHONY: ec
ec:
	$(call print-target)
	$(EC)

# lintspaces
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

LINTSPACES := $(BIN_DIR)/lintspaces.sh

check: lintspaces
.PHONY: lintspaces
lintspaces:
	$(call print-target)
	$(LINTSPACES)

# prettier
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/prettier/prettier

PRETTIER = prettier --check --ignore-unknown .

check: prettier
.PHONY: prettier
prettier:
	$(call print-target)
	$(PRETTIER)

# black
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/psf/black

BLACK = black --check --quiet .

check: black
.PHONY: black
black:
	$(call print-target)
	$(BLACK)

# yamllint
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/adrienverge/yamllint

YAMLLINT = yamllint --config-file .yamllint.yaml .

check: yamllint
.PHONY: yamllint
yamllint:
	$(call print-target)
	$(YAMLLINT)

# shellcheck
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

SHELLCHECK = $(BIN_DIR)/shellcheck.sh

check: shellcheck
.PHONY: shellcheck
shellcheck:
	$(call print-target)
	$(SHELLCHECK)

# shfmt
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

SHFMT = $(BIN_DIR)/shfmt.sh

check: shfmt
.PHONY: shfmt
shfmt:
	$(call print-target)
	$(SHFMT)

# good-filenames
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# TODO: Include superQuery docs

GOOD_FILENAMES := $(BIN_DIR)/good-filenames.sh

check: good-filenames
.PHONY: good-filenames
good-filenames:
	$(call print-target)
	$(GOOD_FILENAMES) $(GITBOOK_CMP_DIR)/$(GITBOOK_ASSETS_DIR)
	@ # $(GOOD_FILENAMES) $(GITBOOK_SUPERQUERY_DIR)/$(GITBOOK_ASSETS_DIR)
	@ # $(GOOD_FILENAMES) $(SPHINX_CMP_DIR)/$(SPHINX_ASSETS_DIR)

# rm-unused-docs
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

RM_UNUSED_DOCS := $(BIN_DIR)/rm-unused-docs.sh --dry-run

check: rm-unused-docs
.PHONY: rm-unused-docs
rm-unused-docs:
	$(call print-target)
	$(RM_UNUSED_DOCS) $(GITBOOK_CMP_DIR)
	$(RM_UNUSED_DOCS) $(GITBOOK_SUPERQUERY_DIR)

# markdownlint
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

MARKDOWNLINT := $(BIN_DIR)/markdownlint.sh

check: markdownlint
.PHONY: markdownlint
markdownlint:
	$(call print-target)
	$(MARKDOWNLINT)

# html-entities
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

HTML_ENTITIES := $(BIN_DIR)/html-entities.sh

check: html-entities
.PHONY: html-entities
html-entities:
	$(call print-target)
	$(HTML_ENTITIES)

# inline-html
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

INLINE_HTML := $(BIN_DIR)/inline-html.sh

check: inline-html
.PHONY: inline-html
inline-html:
	$(call print-target)
	$(INLINE_HTML)

# update-dict
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

UPDATE_DICT := $(BIN_DIR)/update-dict.sh --dry-run

check: update-dict
.PHONY: update-dict
update-dict:
	$(call print-target)
	$(UPDATE_DICT)

# cspell
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

CSPELL = $(BIN_DIR)/cspell.sh
check: cspell
.PHONY: cspell
cspell:
	$(call print-target)
	$(CSPELL)

# misspell
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

MISSPELL = $(BIN_DIR)/misspell.sh

check: misspell
.PHONY: misspell
misspell:
	$(call print-target)
	$(MISSPELL)

# proselintjs
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/sapegin/proselint

# PROSELINTJS = proselintjs --config .proselintrc.json

# all: proselintjs
# .PHONY: proselintjs
# proselintjs:
# 	$(call print-target)
# 	$(FIND) --print0 | xargs -0 $(PROSELINTJS) || true

# textlint
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/textlint/textlint

# TEXTLINT = textlint --config .textlintrc.yaml

# FIND_TEXTLINT_RULE := $(FIND) --print0 | xargs -0 $(TEXTLINT) --rule

# all: textlint
# .PHONY: textlint
# textlint:
# 	$(call print-target)
# 	# Global rules
# 	$(FIND_TEXTLINT_RULE) no-todo || true
# 	$(FIND_TEXTLINT_RULE) no-start-duplicated-conjunction || true
# 	$(FIND_TEXTLINT_RULE) max-comma || true
# 	$(FIND_TEXTLINT_RULE) editorconfig || true
# 	$(FIND_TEXTLINT_RULE) no-dead-link || true
# 	$(FIND_TEXTLINT_RULE) no-empty-section || true
# 	$(FIND_TEXTLINT_RULE) terminology || true
# 	$(FIND_TEXTLINT_RULE) @textlint-rule/no-invalid-control-character || true
# 	$(FIND_TEXTLINT_RULE) @textlint-rule/no-unmatched-pair || true
# 	$(FIND_TEXTLINT_RULE) no-zero-width-spaces|| true
# 	$(FIND_TEXTLINT_RULE) doubled-spaces || true
# 	$(FIND_TEXTLINT_RULE) @textlint-rule/no-duplicate-abbr|| true
# 	# English rules
# 	$(FIND_TEXTLINT_RULE) unexpanded-acronym || true
# 	$(FIND_TEXTLINT_RULE) abbr-within-parentheses || true
# 	$(FIND_TEXTLINT_RULE) en-max-word-count || true
# 	$(FIND_TEXTLINT_RULE) apostrophe || true
# 	$(FIND_TEXTLINT_RULE) diacritics || true
# 	$(FIND_TEXTLINT_RULE) stop-words || true
# 	$(FIND_TEXTLINT_RULE) en-capitalization || true
# 	$(FIND_TEXTLINT_RULE) common-misspellings || true
# 	$(FIND_TEXTLINT_RULE) spelling || true
# 	$(FIND_TEXTLINT_RULE) en-spell || true
# 	$(FIND_TEXTLINT_RULE) write-good || true
# 	$(FIND_TEXTLINT_RULE) rousseau || true
# 	$(FIND_TEXTLINT_RULE) alex || true

# vale
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/errata-ai/vale

# TODO: https://share.streamlit.io/jdkato/rules/main/app/main.py

VALE := $(BIN_DIR)/vale.sh

check: vale
.PHONY: vale
vale:
	$(call print-target)
	$(VALE)

# brok
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/smallhadroncollider/brok

BROK = brok --check-certs --only-failures

# TODO: Keep cache file in Git to speed up CICD

# all: brok
.PHONY: brok
brok:
	$(call print-target)
	$(FIND) --mode md -print0 | xargs -0 $(BROK)

# markdown-link-check
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/tcort/markdown-link-check

MARKDOWN_LINK_CHECK = markdown-link-check \
	--config .markdown-link-check.json \
	--quiet \
	--retry

all: markdown-link-check
.PHONY: markdown-link-check
markdown-link-check:
	$(call print-target)
	$(FIND) --mode md --print0 | xargs -0 $(MARKDOWN_LINK_CHECK)

# rm-unused-assets
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# TODO: Make this check work for Sphinx (RST files in particular)

RM_UNUSED_ASSETS := $(BIN_DIR)/rm-unused-assets.sh --dry-run

check: rm-unused-assets
.PHONY: rm-unused-assets
rm-unused-assets:
	$(call print-target)
	$(RM_UNUSED_ASSETS) $(GITBOOK_CMP_DIR) $(GITBOOK_ASSETS_DIR)
	$(RM_UNUSED_ASSETS) $(GITBOOK_SUPERQUERY_DIR) $(GITBOOK_ASSETS_DIR)
	@ # $(RM_UNUSED_ASSETS) $(SPHINX_SUPERQUERY_DIR) $(SPHINX_ASSETS_DIR)

# fdupes
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# TODO: Scan superQuery docs (see `fdupes.sh` file)

FDUPES := $(BIN_DIR)/fdupes.sh

check: fdupes
.PHONY: fdupes
fdupes:
	$(call print-target)
	$(FDUPES)

# imgdup2go
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# IMGDUP2GO := $(BIN_DIR)/imgdup2go.sh

# all: imgdup2go
# .PHONY: imgdup2go
# imgdup2go:
# 	$(call print-target)
# 	$(IMGDUP2GO) $(GITBOOK_CMP_DIR)/$(GITBOOK_ASSETS_DIR)
# 	$(IMGDUP2GO) $(GITBOOK_SUPERQUERY_DIR)/$(GITBOOK_ASSETS_DIR)
# 	$(IMGDUP2GO) $(SPHINX_CMP_DIR)/$(SPHINX_ASSETS_DIR)

# optipng
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

OPTIPNG := $(BIN_DIR)/optipng.sh --dry-run

check: optipng
.PHONY: optipng
optipng:
	$(call print-target)
	$(OPTIPNG) $(GITBOOK_CMP_DIR) $(GITBOOK_ASSETS_DIR)
	$(OPTIPNG) $(GITBOOK_SUPERQUERY_DIR) $(GITBOOK_ASSETS_DIR)
	$(OPTIPNG) $(SPHINX_CMP_DIR) $(SPHINX_ASSETS_DIR)

# telemetry
# -----------------------------------------------------------------------------

.PHONY: telemetry
telemetry:

# index.html
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

WWW_INDEX := $(BIN_DIR)/www-index.sh

telemetry: $(GH_PAGES_DIR)/index.html
$(GH_PAGES_DIR)/index.html:
	$(call print-target)
	@ mkdir -p $(dir $@)
	$(WWW_INDEX) $(dir $@) $@

# assets.html
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# TODO: Include GitBook superQuery docs
# TODO: Include Sphinx CMP docs

GEN_ASSETS_LIST = $(BIN_DIR)/gen-assets-list.sh

$(GH_PAGES_DIR)/index.html: $(GH_PAGES_DIR)/assets.html
.PHONY: $(GH_PAGES_DIR)/assets.html
$(GH_PAGES_DIR)/assets.html:
	$(call print-target)
	@ mkdir -p $(dir $@)
	$(GEN_ASSETS_LIST) $(GITBOOK_CMP_DIR)/$(GITBOOK_ASSETS_DIR) >$@
	@ # TODO: Format the HTML file

# vale.json
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# https://github.com/errata-ai/vale

# TODO: Wrap this into the `vale.sh` script

VALE_JSON = vale \
	--config .vale.ini \
	--minAlertLevel suggestion \
	--output=JSON \
	--no-wrap \
	--no-exit

VALE_JSON_RULE = $(FIND) --mode vale --print0 | xargs -0 $(VALE_JSON) >$@

$(GH_PAGES_DIR)/index.html: $(GH_PAGES_DIR)/vale.json
.PHONY: $(GH_PAGES_DIR)/vale.json
$(GH_PAGES_DIR)/vale.json:
	$(call print-target)
	@ mkdir -p $(dir $@)
	$(VALE_JSON_RULE)
	prettier --loglevel silent --write $@

# Maintenance
# -----------------------------------------------------------------------------

# TODO: Figure out how to structure these targets

# purge
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

purge:
	rm -rf $(CACHE_DIR)

# clean
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# TODO: Evaluate how many of these rules are still needed

clean:
	rm -rf $(GH_PAGES_DIR)
	rm -rf $(SPHINX_CMP_DOCS_DIR)
	rm -rf $(SPHINX_CMP_VENV_DIR)
	find . -type f -name '*.sig' -delete
	find . -type f -name '*.out' -delete
	find . -type f -name '*.tmp' -delete
