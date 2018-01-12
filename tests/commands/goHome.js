const entryPoint = require('../helpers/entryPoint');

exports.command = function () {
  const client = this;
  client
    .url(entryPoint)
    .waitForElementVisible('#app-container', 30000); // 30 seconds allows the free dyno to wake up
  return this;
};
