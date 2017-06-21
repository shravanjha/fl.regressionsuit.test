# Node.js API Starter Kit &nbsp; <a href="https://gitter.im/kriasoft/nodejs-api-starter"><img src="https://img.shields.io/gitter/room/kriasoft/nodejs-api-starter.js.svg" width="102" height="20"></a> <a href="https://github.com/kriasoft/nodejs-api-starter/stargazers"><img src="https://img.shields.io/github/stars/kriasoft/nodejs-api-starter.svg?style=social&label=Star&maxAge=3600" height="20"></a> <a href="https://twitter.com/ReactStarter"><img src="https://img.shields.io/twitter/follow/ReactStarter.svg?style=social&label=Follow&maxAge=3600" height="20"></a>

[Node.js API Starter Kit][nodejskit] is a boilerplate and tooling for authoring **data API**
backends with [Node.js][node], [JavaScript][js] (via [Babel][babel]) and [GraphQL][gql]. It's
meant to be paired with a web and/or mobile application project such as [React Starter Kit][rsk].

## Features

## Directory Layout

```bash
.
├── /config/                    # Configuration files (for Docker containers etc.)
├── /src/                       # Node.js application source files
│   ├── /dataloader.js          # Data access utility to load test input data from CSV/excel
│   ├── /db.js                  # Database access read and write
├── /test/                      # All test cases
│   ├── /modules/               # Independent application module to test
│   │   ├── /login              # A specific module
│   │   │   ── /index.test.js   # All test scenarios for login module
│   │   └── /...                # etc.
├── index.js                    # Node.js server (entry point)
├── package.json                # The list of project dependencies
└── package.lock.json           # Fixed versions of all the dependencies
```


## Getting Started


## Testing

npm test index.js

## Debugging


## Keeping Up-to-Date

If you keep the original Git history after clonning this repo, you can always fetch and merge
the recent updates back into your project by running:

git checkout master
git fetch fl.regressionsuite.test
git merge fl.regressionsuite.test/master


## Deployment


## Support

* [#nodejs-api-starter](https://gitter.im/kriasoft/nodejs-api-starter) on Gitter — Watch announcements, share ideas and feedback
* [GitHub Issues](https://github.com/kriasoft/nodejs-api-starter/issues) — Check open issues, send bug reports feature requests
* [@koistya](https://twitter.com/koistya) on [Codementor](https://www.codementor.io/koistya) or [Skype][skype] — Private consulting and customization requests


## License

Copyright © 2017-present Shravan Jha. This source code is licensed under the MIT license found in the
[LICENSE.txt](https://github.com/shravanjha/fl.regressionsuite.test/blob/master/LICENSE.txt) file.

