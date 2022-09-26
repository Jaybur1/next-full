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
    * @next-boost/hybrid-disk-cache - [@next-boost/hybrid-disk-cache]()
    * @next-boost/next-boost - [@next-boost/next-boost]()
    * @next-boost/redis-cache - [@next-boost/redis-cache]()
* @prisma/client - [prisma.io](https://www.prisma.io/)
* next
* next-api-handler - [next-api-handler docs](https://github.com/Howard86/next-api-handler)
* react
* react-dom

## Development dependencies
- `husky` & `lint-staged`: wrangle git hooks and run as npm scripts
- `prettier`: automatic code formatter
- `eslint`: code linter
- `jest`: testing library


## Testing integration

- Unit testing: `Jest` `enzym`
- Each team member who develops a feature responsible for its testing.
## UI component lib integration

- Components will be tested using `Jest & Enzym`, please refer [React official docs](https://reactjs.org/docs/testing-recipes.html) for examples on how to mock `DOM` rendering


## Setup eslint auto-fix on save
Please refer to [eslint settings on VS code](https://daveceddia.com/vscode-use-eslintrc/)



