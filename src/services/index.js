const featherstutorial = require('./featherstutorial/featherstutorial.service.js');
const message = require('./message/message.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(featherstutorial);
  app.configure(message);
};
