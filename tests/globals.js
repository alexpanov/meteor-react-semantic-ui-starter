module.exports = {
// eslint-disable-next-line consistent-return
  beforeEach(browser, done) {
    console.log('Executing global `beforeEach` function');
    done();
  },
};
