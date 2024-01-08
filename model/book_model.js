const mongo = require('mongoose');

const book_schema = new mongo.Schema({

  title: {

    type: String,

    required: true,

  },

  author: {

    type: String,

    required: true,

  },

  category: {

    type: String,

    required: true,

  },

  price: {

    type: Number,

    required: true,

  },

  quantity: {

    type: Number,

    required: true,

  },

});

const book_model = mongo.model('Book', book_schema);

module.exports = book_model;