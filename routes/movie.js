const route = require('express').Router();
const controller = require('../controllers/movie');
const adminAuthentication = require('../middlewares/adminAuthentication');
const authorization = require('../middlewares/adminAuthorization');

route.get('/health-check', controller.healthCheck);
route.get('/', controller.index);
route.get('/:id', controller.detail);

route.use(adminAuthentication);
route.use(authorization);
route.post('/add', controller.add);
route.put('/:id', controller.edit);
route.delete('/:id', controller.delete);

module.exports = route;