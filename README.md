# base-npm-library-es6
![Travis-CI Build](https://travis-ci.org/node-templates/base-npm-library-es6.svg?branch=master)
![Prod Dependencies](https://david-dm.org/node-templates/base-npm-library-es6/status.svg)
![Dev Dependencies](https://david-dm.org/node-templates/base-npm-library-es6/dev-status.svg)

![NPM Statistics](https://nodei.co/npm/base-npm-library-es6.png?downloads=true&downloadRank=true&stars=true)

## Node.js ES6 Library Starter Pack
This Github repository is intended as a Node.js starter pack for people
wishing to get a basic library produced without having to configure a
wide range of common tools. You can just fork and start building
your module to share with the world.

## Licencing
This repository, like all templates in [our GitHub Org](https://github.com/node-templates) is
MIT licensed. That means you can use it freely without restriction or attribution. If this
helped you get started, give the repo a star on GitHub and help spread the word.

## What this Pack Includes
The starter pack currently features the following tools and techniques:

- Code Coverage Analysis (Package: [istanbul](https://github.com/gotwarlost/istanbul) / [gulp-istanbul](https://github.com/SBoudrias/gulp-istanbul))
- Documentation Generation (Package: [esdoc](https://github.com/esdoc/esdoc)/[gulp-esdoc](https://github.com/nanopx/gulp-esdoc))
- Standards Enforcement (Package: [eslint](https://github.com/eslint/eslint)/[gulp-eslint](https://github.com/adametry/gulp-eslint)
    - Special nod to [Airbnb](https://github.com/airbnb/javascript/) for their coding standards ruleset.
- Unit Testing with:
    - [Chai](https://github.com/chaijs/chai) (BDD Style Assertions)
    - [Mocha](https://github.com/mochajs/mocha) (Test Runner)

These are all validated and working on NodeJS 4.x and above, we test for multiple
variations of node which can be seen in our .travis.yml

If you are looking to create an _application_ then please use one of the
other project templates from [our GitHub Org](https://github.com/node-templates)
which will be better suited, this will include:

- MVC Web Applications
- Swagger Based REST Microservices
- And others.

## Getting Started
To get started, please do the following:

* Create a fork of our repository into your own workspace or organisation 
    (this way you can track improvements and updates as we make them).
* Replace this README.md file with your own project-specific content.
* Update package.json to give your app it's own unique identity and version.
* If you aren't using VSCode, then you can also drop the .vscode directory, 
which defines some IDE options to make sure the standards for tabs and spacing
are used.

Then it's as simple as:

        npm install
        gulp

## Other Commands
The following gulp tasks are defined:

* gulp *docs* - Regenerate esdoc documentation.
* gulp *lint* - Run ESLint validation of code standards. 
    - You can also lint-lib or lint-tests to look at specific areas.
* gulp *test* - Run unit tests.

## But you aren't using package X!
It's a big ecosystem: with each library and template the intent is to show one
of the best, most widely accepted ways to achieve the outcome. If you've got a
suggestion to change to another module, we welcome pull requests as long as they
are prefaced with some discussion. 
