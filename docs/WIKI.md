# NEXT FULL WIKI

<!-- TOC -->
- [Make it more Agile](#make-it-more-agile)
- [Browser support](#browser-support)
- [Production dependencies](#production-dependencies)
- [Development dependencies](#development-dependencies)
- [Styling/CSS lib](#stylingcss-lib)
- [Project folder structure](#project-folder-structure)
- [Branch name convention](#branch-name-convention)
- [Branch name convention](#branch-name-convention)
- [Commit message name convention:](#commit-message-name-convention)
- [Dependency management](#dependency-management)
- [Testing integration](#testing-integration)
- [UI component lib integration](#ui-component-lib-integration)
- [Multiple language support](#multiple-language-support)
- [Setup eslint auto-fix on save](#setup-eslint-auto-fix-on-save)
- [Nvm auto switch and load script](#nvm-auto-switch-and-load-script)
- [Pull request guide](#pull-request-guide)
<!-- /TOC -->

## Folder structure
The template architecture is adopting a more agile approach that each functional component should have all its dependencies inside their own group folder, for example:

- services
- constants
- utils
- assets
- types

```
├── README.md
├── node_modules/
├── package.json
├── public
│      ├── assets
│      │     ├── common
│      │     ├── <page name>
│      ├── favicon.ico
|
├── src
|    ├── components
|    |       ├── common
|    |       ├── <component name group>
|    |                   ├──ComponentName.tsx
|    |
|    ├── constants
|    |       ├── index.ts (export * from './constantFile.tsx')
|    |       ├── <constantName>.ts
|    |
|    ├── types
|    |      ├── index.ts (export * from './typeFile.tsx')
|    |      ├── <typeName>.ts
|    |
|    ├── _utils
|    |     ├── index.ts (export * from './utilFile.tsx')
|    |     ├── <utilName>.ts
|    |
|    ├── services
|          ├── index.ts (export * from './utilFile.tsx')
|          ├── sockets
|          |      ├── index.ts (sockets setup)
|          |      ├── eventHandler.ts
|          |
|          ├── serviceName.ts (or folder name)
|
|
├── pages
|     ├── api (if needed)
|     |    ├── <apiName>.ts
|     |
|     |
|     ├── _app.tsx (global entry point for all routes)
|     ├── index.tsx (root page)
|     ├── <pageName>.tsx (will be the route)
|     ├── <parentRoute>.tsx (parent route)
|             ├── index.tsx (parent route page)
|             ├── <subRoute>.tsx (parentRoute/subRoute)
|
|
├── styles
|     ├── <page name>
|     |       ├──PageName.module.scss
|     |
|     ├── global.scss
├── test
|    ├── __mocks__
|    |       ├── fileMock.js(for mocking file imports, jest has issues)
|    |
|    ├── components
|    |       ├── common
|    |       ├── <page name>
|    |               ├── ComponentName.test.tsx
|    |
|    ├── utils
|         ├── utilName.test.ts
|
├── lib
|    ├── library specific scripts
|
├── prisma
|    ├── prisma schemas nad init files
|
├── docs
|    ├── template docs
|
├── bin
|    ├── misc shell scripts
```

## Browser support
We probably will need to support older browsers:
  * Next.js supports IE11 and all modern browsers (Edge, Firefox, Chrome, Safari, Opera, etc..) with no required configuration.

## Production dependencies
* Next Boost - for request client and SSR caching [next-boost docs]()
    * @next-boost/hybrid-disk-cache - [@next-boost/hybrid-disk-cache]
    * @next-boost/next-boost - [@next-boost/next-boost]
    * @next-boost/redis-cache - [@next-boost/redis-cache]
* @prisma/client
* next
* next-api-handler - [next-api-handler docs](https://github.com/Howard86/next-api-handler)
* react
* react-dom

## Development dependencies

- `husky` & `lint-staged`: wrangle git hooks and run as npm scripts
- `prettier`: automatic code formatter
- `eslint`: code linter
- `jest`: testing library

## Styling/CSS lib

SaSS with BEM naming convention <http://getbem.com/naming/>.

## Project folder structure


## Branch name convention

- `<User story number>-<feature/fix>/<task#>-<task name>-<task name>`
- ex: `34-feature/homepage-hero-banner`

## Commit message name convention:
- `#<task number>: changes that have been made`
- ex: `#340: add Button component; remove console.log from Icon.tsx`
## Dependency management

- `nodejs` 16.16.0
- `npm` 8.11.0

## Testing integration

- Unit testing: `Jest` `enzym`
- Each team member who develops a feature responsible for its testing.
## UI component lib integration

- Components will be tested using `Jest & Enzym`, please refer [React official docs](https://reactjs.org/docs/testing-recipes.html) for examples on how to mock `DOM` rendering

## Multiple language support
we will support english/french/spanish to begin with.


## Setup eslint auto-fix on save
Please refer to [eslint settings on VS code](https://daveceddia.com/vscode-use-eslintrc/)

## Nvm auto switch and load script

Add this to your terminal entrypoint after (ex: .bash_profile/.bashrc, .zprofile/.zshrc)

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

## Pull request guide
1. Click on the new pull request button
  ![click on the new pull request button](./pr_1.png)
2. Follow the form:
  ![PR form](./pr_2.png)
    1. Title of the related ticket.
    2. The description have to contain all the done work in the particular branch
      ```markdown
        a. Implemented primary button component + styles
        b. Implemented Landing Page component + styles + SSR
        c. Refactored capitalize util function
        d. add unit + e2e tests for: x,y,z components
      ```
    3. Please specify a reviewer. At all times there should be at least one reviewer.
    4. Link work items. At all times there should be a ticket related to the current PR.
    5. Unresolved comments and un linked merge request will be blocked
    6. At merge the branch should be deleted