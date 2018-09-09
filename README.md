
# clear-output

[![NPM version](https://img.shields.io/npm/v/clear-output.svg?style=flat)](https://npmjs.com/package/clear-output) [![NPM downloads](https://img.shields.io/npm/dm/clear-output.svg?style=flat)](https://npmjs.com/package/clear-output) [![CircleCI](https://circleci.com/gh/lijsh/clear-output/tree/master.svg?style=shield)](https://circleci.com/gh/lijsh/clear-output/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/lijsh/donate)

> A cli utils that can clear your terminal output.

## Install

```bash
yarn add clear-output
```

## Usage

```js
const clear = require('../')

const str = 'you will see this line\nyou won\'t see \nthese lines'

console.log(str)

clear(str)
```

And you will see this:

<img src="sample-preview.png" width="480">

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**clear-output** © [lijsh](https://github.com/lijsh), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by lijsh with help from contributors ([list](https://github.com/lijsh/clear-output/contributors)).

> [github.com/lijsh](https://github.com/lijsh) · GitHub [@lijsh](https://github.com/lijsh) · Twitter [@lijiashen](https://twitter.com/lijiashen)
