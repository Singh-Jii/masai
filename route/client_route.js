const exp = require('express');

const client_control = require('../control/client_control');

const route = exp.Router();

route.get('/:id', client_control.get_client_id);

module.exports = route;