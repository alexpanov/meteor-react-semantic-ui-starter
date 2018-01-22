const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

module.exports = {
  before: () => {
    console.log('Executing test `before` hook');
  },

  'Add a VIN number': function (browser) {
    browser
      .goHome()
      .waitForElementVisible('#add-vin-form')
      .setValue('#add-vin-form input[name=value]', 'SGZCZ43D13S812715')
      .setValue('#add-vin-form input[name=notes]', 'Submitted by Nightwatch')
      .click('#add-vin-form button')
      .end();
  }
};
