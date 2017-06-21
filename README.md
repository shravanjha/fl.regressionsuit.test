# Regression Suite Framework

nodejs

selenium web driver

jasmine (testing framework) + Karma (test runner) + Sinon.js (Standalone test spies, stubs and mocks for JavaScript)

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


## License

Copyright © 2017-present Shravan Jha. This source code is licensed under the MIT license found in the
[LICENSE.txt](https://github.com/shravanjha/fl.regressionsuite.test/blob/master/LICENSE.txt) file.

