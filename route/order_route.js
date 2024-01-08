const exp = require('express');

const order_control = require('../control/order_controlr');

const route = exp.Router();

route.post('/', order_control.create_order);

module.exports = route;