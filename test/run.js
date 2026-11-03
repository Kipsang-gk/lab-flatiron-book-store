const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: 5000,
  reporter: 'spec',
});

mocha.addFile('test/indexTest.js');
mocha.run((failures) => {
  process.exitCode = failures ? 1 : 0;
});
