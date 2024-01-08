const exp = require('express');

const book_control = require('../control/book_control');

const route = exp.Router();

route.get('/', book_control.get_all_book);

route.get('/:id', book_control.get_book_id);

module.exports = route;