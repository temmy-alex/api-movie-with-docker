const route = require('express').Router();
const userRoute = require('./user');
const movieRoute = require('./movie');

route.use('/users', userRoute)
route.use('/movie', movieRoute);

module.exports = route;