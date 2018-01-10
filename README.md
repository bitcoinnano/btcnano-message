# Btcnano Message Verification and Signing for Btcnano


[![NPM Package](https://img.shields.io/npm/v/btcnano-message.svg?style=flat-square)](https://www.npmjs.org/package/btcnano-message)
[![Build Status](https://img.shields.io/travis/bitpay/bitcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/bitcoinnano/btcnano-message)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore-message.svg?style=flat-square)](https://coveralls.io/r/bitcoinnano/btcnano-message?branch=master)

btcnano-message adds support for verifying and signing btcnano messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main btcnano repo](https://github.com/bitcoinnano/Bitcoin-Nano) for more information.

## Getting Started

```sh
npm install btcnano-message
```

```sh
bower install btcnano-message
```

To sign a message:

```javascript
var bitcore = require('btcnano-lib');
var Message = require('btcnano-message');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/bitcore/blob/master/CONTRIBUTING.md) on the main btcnano repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2015-2021 Btcnano, Inc. Btcnano is a trademark maintained by Btcnano, Inc.

