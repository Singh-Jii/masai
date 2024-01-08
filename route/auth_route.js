const exp = require('express');

const auth_control = require('../control/auth_control');

const route = exp.Router();

route.post('/register', auth_control.my_reg);

route.post('/login', auth_control.my_log);

module.exports = route;
