# Vuetify Extension Template with TypeScript

This repository contains a template for building [Vue.js](https://vuejs.org/) components that extend components from the [Vuetify UI library](https://vuetifyjs.com).

## The Reason for this Template

In July 2019, [Vuetify released version 2.0 (Arcadia)](https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0) of a library of UI components that closely implement the [Material Design specification](https://material.io/). Among many other improvements, Vuetify 2.0 featured a complete rewrite of all its components using [TypeScript](http://www.typescriptlang.org/). TypeScript is a superset of JavaScript that implements a rigorous and robust type-checking system. TypeScript's benefits include:

* Enhanced code quality and understandability
* More powerful tooling, allowing things like code completion
* Type inference, which can help developers catch bugs earlier
* Access to all of the features of ESNext
* Ability to compile down to a version of JavaScript that runs in all browsers

Despite these benefits, it is still quite challenging to setup a development environment that makes it easy for developers to build extensions to Vuetify 2.0 components that takes full advantage of the benefits of its TypeScript implementation.

This template was created to make it much easier for developers to build high-quality extensions for Vuetify 2.0 that will benefit the entire extended community of developers who use Vuetify.

## Instructions for Use

In order to use this template, you will need to follow the following steps (detailed explanation follows):

1. Make sure you have accounts with the following entities:
    * [GitHub](https://github.com/) (you'll also need [Git](https://git-scm.com) installed locally on your computer)
    * [NPM](https://www.npmjs.com/signup)
    * [TravisCI.org](https://travis-ci.org/)
    * [Coveralls.io](https://coveralls.io/sign-up)
2. Install [yarn](https://yarnpkg.com)
3. Install global packages with yarn:
    * [Commitizen](http://commitizen.github.io/cz-cli/)
    * [Semantic Release](https://semantic-release.gitbook.io/semantic-release/usage/installation)
4. Create a new blank repo on GitHub
5. Download a zipped copy of this repo
6. Unzip to a local directory on your computer
7. Rename and/or update the following files:
    * `package.json`
    * `LICENSE`
    * `README.md`
    * `src/`
      * `index.ts`
      * `YourComponent.ts`
      * `YourComponent.sass`
      * `__tests__/YourComponent.spec.ts`
    * `dev/`
      * `index.js`
      * `App.vue`
8. Install default dependencies with yarn
9. Initialize a git repository in your customized directory
10. Make your first commit
11. Run your first tests
12. Do your first build
13. Start the dev server for the first time
14. Build your extension
15. Release it!
16. Publicize, support, and maintain

## Questions, Comments, Bug Reports, etc.

Comments, questions, pull requests, and bug reports are very welcome. Please [submit an issue](https://github.com/morphatic/vuetify-extension-template/issues) via the Issues tab above.

Have fun!
