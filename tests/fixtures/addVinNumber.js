const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

module.exports = {
  before: () => {
    console.log('Executing test `before` hook');
  },

  // @todo #2:30min Implement 'Add VIN number' test
  'Add a VIN number': function (browser) {
    browser
      .goHome()
      .end();
  }
};
