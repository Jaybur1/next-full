<!-- TOC ignore:true -->
# Setup Next project with TS, ES-lint and Testing libraries
<!-- TOC ignore:true -->
## Table of contents
<!-- TOC -->
  - [Prep](#prep)
    - [(Optional) Install NVM:](#optional-install-nvm)
    - [Init:](#init)
  - [TS](#ts-configuration)
  - [Linting](#linting)
    - [Eslint](#eslint-configuration)
    - [Stylelint](#stylelint-configuration)
  - [Husky](#husky-configuration)
  - [Global](#global-configurations)

<!-- /TOC -->
### Prep:
### (Optional) Install NVM:
  1. Run the nvm installer via the terminal: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
  2. Add the following to ~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc, depending what is your preferred terminal.
  * The following will provide:
      * nvm auto load when you open a terminal
      * node auto switch to a specific version if .nvmrc is present inside a directory you currently in.
          ``` bash
              ### load nvm
              function load-nvm {
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
                [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
              }

              #nvm
              load-nvm

              #
              # Run 'nvm use' automatically every time there's
              # a .nvmrc file in the directory. Also, revert to default
              # version when entering a directory without .nvmrc
              #

              enter_directory() {
                if [[ $PWD == $PREV_PWD ]]; then
                  return
                  fi

                PREV_PWD=$PWD
                if [[ -f ".nvmrc" ]]; then
                  local nvmrc_node_version=$(nvm version "$(cat .nvmrc)")
                      if [ "$nvmrc_node_version" = "N/A" ]; then
                    nvm install
                  elif [ "$nvmrc_node_version" != "$(nvm version)" ]; then
                    nvm use
                  fi
                  NVM_DIRTY=true
                elif [[ $NVM_DIRTY = true ]]; then
                  nvm use default
                  NVM_DIRTY=false
                fi
              }

              export PROMPT_COMMAND=enter_directory
          ```
  3. Reload the terminal
  4. cd into the project directory and run `nvm use` in your terminal
      * If you getting the following error:
          ```
             N/A: version "16.13.2 -> N/A" is not yet installed.

            You need to run "nvm install 16.13.2" to install it before using it.
          ```
          please run `nvm install 16.13.2` and confirm with `node --version` that the correct node version was loaded

### Init:
  1. Install an initial next.js project with `yarn create next-app [name of project] --typescript`
  2. Install dependencies:
      * next-boost: `yarn add @next-boost/hybrid-disk-cache @next-boost/next-boost @next-boost/redis-cache next-api-handler`
      * prisma: `yarn add -D prisma @prisma/client`
      * axe-core: a library that checks for accessibility best practices: `yarn add -D axe-core @axe-core/react`
      * prettier: `yarn add -D prettier`
      * style-lint: `yarn add stylelint stylelint-config-prettier stylelint-config-prettier-scss stylelint-config-standard stylelint-config-standard-scss`
      * es-lint should have been already installed with the create-next-app command but we will require some extra plugins: `yarn add -D  eslint-config-next eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-check-file eslint-plugin-import eslint-plugin-prefer-arrow eslint-plugin-prettier eslint-plugin-react`
      * cross-env for cross-platform commands capability : `yarn add cross-env`
      * testing dependencies: `yarn add -D jest jest-environment-jsdom @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @testing-library/dom identity-obj-proxy enzyme @types/enzyme @wojtekmaj/enzyme-adapter-react-17`
      * husky: `yarn add -D husky lint-staged`
---
### TS configuration
  1. Configure tsconfig.json file
  2. Make sure all functions in initial files are arrow functions
---
### Linting
### Eslint configuration
  1. Init eslint: `yarn eslint --init`
      * `To check syntax, find problems, and enforce code style`
      * `JavaScript modules (import/export)`
      * `React`
      * `Yes` for using typescript
      * check `Browser` and `Node`
      * `Use a popular style guide` -> `Airbnb` * optional (I removed it)
      * `Json`
      * `Yes` to Install all the missing dependencies
  2. Add an `.eslintignore` file
      * add initial ignores into that file:
        ```
          .next
          node_modules
          coverage
        ```
  3. Setup prettier:
      * In `.eslintrc.json` file, add `prettier/prettier` under `rules` to configure preferred style:
          ```
          "prettier/prettier": ["error", {
            "tabWidth": 2,
            "printWidth": 150,
            "singleQuote": true,
            "trailingComma": "es5",
            "semi": false
          }]
          ```
      * Add additional dev dependencies: `yarn add -D eslint-plugin-prettier eslint-config-prettier eslint-plugin-prefer-arrow`
  4. Absolute imports configuration
### StyleLint configuration
  1. Install the following dependencies: `yarn add -D stylelint stylelint-config-standard stylelint-config-prettier`
      * *For scss add the following dependencies: `yarn add -D stylelint stylelint-config-standard-scss stylelint-config-prettier-scss`
  2. Create a `.stylelintrc.json` file in the root directory and add the following:
      ```JSON
      {
        "extends": [
          "stylelint-config-standard",
          "stylelint-config-standard-scss",
          "stylelint-config-prettier-scss"
        ],
        // if some rules need to be modified:
        "rules": {
          // visit https://stylelint.io/user-guide/rules/list to see all the list of rules
        }
      }
      ```

  3. For manual checks, add `"lint:style": "stylelint \"**/*.scss\" --fix",` to your scripts in `package.json` file.
  4. Add an `.stylelintignore` and insert the following:
      ```
        .next
        node_modules
        coverage
      ```
---
### Husky configuration
  1. `yarn husky install`
  2. `npx husky-init && yarn`
  3. Create a `.lintstagedrc.json` file and insert the following:
      ```JSON
          {
            "*.{ts,tsx}": ["eslint --fix"],
            "*.{scss, css}": ["stylelint --fix"]
          }
      ```
 4. Add the following in `package.json` in the scripts section:
      ```json
        ...
        "pre-commit": "lint-staged"
        ...
      ```
  5. Add the following to `.husky/pre-commit`:

      ```bash

        yarn pre-commit

      ```
### Prisma configurations
  1. To initialize prisma, we need to run the following command: `npx prisma init` (by default it will be <b>postgres</b>, but prisma supports all kinds of DB providers. Please refer to the [prisma docs](https://www.prisma.io/docs/getting-started) for more information on how to setup a different DB provider)
  2. The previous command should create some files, and one of them should be the `.env` file(if it wasn't created before). and in this file there was a line add stating something like: `DATABASE_URL="<db_provider>://<db_username>:<db_password>@<db_host>:<db_port>/<db_name>". please fill in the needed fields in the connection string.
  3. Create the tables in `./prisma/schema.prisma`. please refer to [prisma docs](https://www.prisma.io/docs/) for more information on how to do that.
  4. Run the following command to sync up prisma client with the latest db changes (*needs to be ran every time there is a change in the schema): `npx prisma generate`
  5. Finally we will need to expose prisma to the client:

      a. Create a `prisma.ts` file in the `lib` folder in the root directory: `mkdir lib && touch lib/prisma.ts`
      b. And add the following code to the file
      ```JAVASCRIPT
        import { PrismaClient } from "@prisma/client"

        declare global {
          var prisma: PrismaClient | undefined
        }

        export const prisma = global.prisma || new PrismaClient({log: ['query']})

        if (process.env.NODE_ENV !== 'production') global.prisma = prisma
      ```
  6. You are good to go. For more information please refer to [prisma docs](https://www.prisma.io/docs/getting-started) and the complete command list (specific to this project) [here](../README.md#command-list)

### Global configurations:
 - Because Husky configuration is the only place where npx is used, so `package-lock.json` should not be generated. But if it does exist, it will create confusion(because we are using yarn). To fix this, delete `package-lock.json`

