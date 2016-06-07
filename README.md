Code-Kata Template for NodeJS

To use this code kata boilerplate you need `nodeJs` with its package manager `npm` installed. To install all necessary dependencies just run

    $ npm install

After that, you be able to run the unit tests with

    $ npm test

Generating a code coverage can be done by

	$ npm run coverage
	$ open coverage/index.html

There is also a npm task which runs mocha in watch mode. This is pretty handy because you don't need to wait each time
until babel has been booted.

    $ npm run watch
