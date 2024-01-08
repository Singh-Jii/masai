const mongo = require('mongoose');

const client_schema = new mongo.Schema({

  name: {

    type: String,

    required: true,

  },

  email: {

    type: String,

    required: true,

    unique: true,

  },

  psswrd: {

    type: String,

    required: true,

  },

  isAdmin: {

    type: Boolean,

    default: false,

  },

});

const client_model = mongo.model('User', client_schema);

module.exports = client_model;