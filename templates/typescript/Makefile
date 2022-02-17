BIN_PATH=./node_modules/.bin/

BABEL_PATH=$(BIN_PATH)babel
PRETTIER_PATH=$(BIN_PATH)prettier
ESLINT_PATH=$(BIN_PATH)eslint

NODE_PATH=node
YARN_PATH=yarn

INPUT_DIR=src
OUTPUT_DIR=dist
EXTENSIONS=.ts,.tsx
NODE_MODULES=node_modules

YARN_ERROR_FILE=yarn-error.log

FLAGS=--out-dir $(OUTPUT_DIR) --copy-files --extensions $(EXTENSIONS) --source-maps inline

PRETTIER_FLAGS=--write
ESLINT_FLAGS=--ext .ts

PRETTIER_ARGS=.
ESLINT_ARGS=.

.PHONY: fix lint clean

fix:
	$(PRETTIER_PATH) $(PRETTIER_FLAGS) $(PRETTIER_ARGS)

lint:
	$(ESLINT_PATH) $(ESLINT_ARGS) $(ESLINT_FLAGS)

clean:
	rm -rf $(OUTPUT_DIR)
	rm -rf $(NODE_MODULES)
	rm $(YARN_ERROR_FILE)

$(OUTPUT_DIR): $(INPUT_DIR) $(NODE_MODULES)
	$(BABEL_PATH) $(INPUT_DIR) $(FLAGS)