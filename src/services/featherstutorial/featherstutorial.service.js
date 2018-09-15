// Initializes the `featherstutorial` service on path `/featherstutorial`
const createService = require('feathers-sequelize');
const createModel = require('../../models/featherstutorial.model');
const hooks = require('./featherstutorial.hooks');
const filters = require('./featherstutorial.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'featherstutorial',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/featherstutorial', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('featherstutorial');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
