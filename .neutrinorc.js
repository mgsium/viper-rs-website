const standard = require('@neutrinojs/standardjs');
const preact = require('@neutrinojs/preact');
const mocha = require('@neutrinojs/mocha');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    standard(),
    preact({
      html: {
        title: 'viper_site'
      }
    }),
    mocha(),
  ],
};
