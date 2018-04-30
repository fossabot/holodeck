# Holodeck
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FFreedombase%2Fholodeck.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FFreedombase%2Fholodeck?ref=badge_shield)

_A set of [styled-components](https://github.com/styled-components/styled-components) with easily editable themes._

## Overview
This component lib is set up to use
 [styled-components](https://github.com/styled-components/styled-components),
 [polished](https://github.com/styled-components/polished), and [styled-theming](https://github.com/styled-components/styled-theming) 💅. This
 starter is designed to help you create your own components and easily publish them to npm.

## Up & Running
To install dependencies with Yarn, run:
```sh
$ yarn
```

or to install with npm, run:

```sh
$ npm install
```

## File Structure
This component library borrows its structure from [BEM](http://getbem.com/introduction/) and is set
 up to use Blocks, Elements, and Modifiers. Below is a description of each.

### Blocks
Blocks are the highest level of abstraction in the Blocks, Elements, Modifiers concept.
 They are responsible for providing the context for Elements, handling UI logic, and rendering the
 Elements within the Block. They are not connected to application state, nor do they handle any
 business logic.

### Elements
Elements are the smallest, indivisible parts of UI. They are responsible for actually rendering the
 UI. They do not handle application logic or UI logic, but they do handle their own modifiers which
 modify the element’s style. Elements generally exist within the context of a Block (as their own
 file in the Block’s directory) allowing the reuse of that set of Elements, but they are not
 exclusively bound to blocks. An example of a stand-alone Element would be an A, Link, H3, or P.
 These common elements live in `lib/elements`.

### Modifiers
This library utilizes
 [styled-theming](https://github.com/styled-components/styled-theming) to build
 modifiers. Modifiers are small functions that allow us to alter the properties of an Element.
 They primarily live in the Element's file and are solely responsible for modifying styles.
 Some modifiers are common to multiple Elements. An example would be `fontWeights`.
 These common modifiers live in `lib/modifiers`

### An Example Structure
```
├ lib/
├── blocks/
|   ├── Card
|   |   ├── Body.js     // <- Element
|   |   ├── Footer.js   // <- Element
|   |   ├── Header.js   // <- Element
|   |   └── index.js    // <- Block
|   └── index.js        // <- export for all Blocks
├── elements/
|   ├── A
|   |   ├── __tests__
|   |   |   ├── __snapshots__
|   |   |   |   └── index.js.snap   // <- Snapshot Test
|   |   |   └── index.js            // <- Test
|   |   └── index.js                // <- Element
|   ├── Link
|   |   └── index.js                // <- Element
|   ├── H3
|   |   └── index.js                // <- Element
|   ├── P
|   |   └── index.js                // <- Element
|   └── etc.
|   └── index.js                    // <- export for all Blocks
├── modifiers/
|   ├── fontWeights
|   └── etc.
└── index.js                        // <- main export for the library
```

## Local Development

### Module Development Workflow
Helpful information on development workflow in this library lives
 [here](https://gist.github.com/alanbsmith/6c581e5042b8e5e558b0b4454192eb69).

### Linting
_**NOTE:** The linter will run against everything in the `lib` directory._

### JavaScript Linting
_This assumes you have eslint and eslint-watch installed. If you don't, run the following:_
```
$ npm i -g eslint eslint-watch
```
or if you need permissions:
```
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:
```
$ yarn lint:js
```

To run the watch task:
```
$ yarn lint:js:watch
```

#### Style Linting
Linter for Sass / SCSS.

To run the style linter:
```
$ yarn lint:style
```

#### Linting JavaScript & Styles
To run both linters:
```
$ yarn lint
```

### Testing
To run the tests once:
```
$ npm test
```

To run the watch script (for only relevant test files)
```
$ npm run test:watch
```

To run the watch script (for all test files)
```
$ npm run test:watchAll
```

To view the coverage report:
```
$ npm run test:coverage:report
```

### Review
If you'd like to run the linters and tests at once (this is a nice check before pushing to
Github or deploys), you can run:

```
$ npm run review
```

### Build
_**NOTE:** When you run `build`, Babel will create a `build` directory. This is what your users
will interact with when they use your library. Nothing in `lib` gets shipped with your
published module._

Run once:
```
$ npm run build
```

Run the watch script:
```
$ npm run build:watch
```

_**NOTE:** the build script runs in the `prepare` script just before you publish to npm._

## Contributing
I am thankful for any contributions made by the community. By contributing you agree to abide by
the Code of Conduct in the [Contributing Guidelines](https://github.com/alanbsmith/component-library-starter/blob/master/.github/CONTRIBUTING.md).

## License
[MIT](https://github.com/Freedombase/holodeck/blob/master/LICENSE)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FFreedombase%2Fholodeck.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FFreedombase%2Fholodeck?ref=badge_large)

## Based on
This library is based on [Component Library Starter](https://github.com/alanbsmith/component-library-starter).