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

# $(call print-target)
define print-target
@ printf "\e$(BOLD)make %s\e$(RESET)\n" "$$(echo $@ | sed 's,.stamp,,')"
endef

# Meta targets
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

# TODO: Check json keys ordering

.PHONY: check
check:

.PHONY: check-parallel
check-parallel:
	@ $(MAKE) --no-print-directory -j --output-sync=target check

only-ascii:
check: only-ascii

ec:
check: ec

lintspaces:
check: lintspaces

prettier:
check: prettier

yamllint:
check: yamllint

shellcheck:
check: shellcheck

shfmt:
check: shfmt

good-filenames:
check: good-filenames

rm-unused-docs-dry:
check: rm-unused-docs-dry

markdownlint:
check: markdownlint

html-entities:
check: html-entities

inline-html:
check: inline-html

update-dict-dry:
check: update-dict-dry

cspell:
check: cspell

misspell:
check: misspell

vale:
check: vale

markdown-link-check:
check: markdown-link-check

brok:
check: brok

rm-unused-assets-dry:
check: rm-unused-assets-dry

fdupes:
check: fdupes

optipng-dry:
check: optipng-dry

# telemetry
# -----------------------------------------------------------------------------

.PHONY: telemetry
telemetry:

telemetry: telemetry-index

telemetry-index: telemetry-assets

# clean
# -----------------------------------------------------------------------------

# TODO: Evaluate how many of these rules are still needed

clean:
	rm -rf $(GH_PAGES_DIR)
	find . -type f -name '*.sig' -delete
	find . -type f -name '*.out' -delete
	find . -type f -name '*.tmp' -delete

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
