const mongo = require('mongoose');

const order_schema = new mongo.Schema({

  client: {

    type: mongo.Schema.Types.ObjectId,

    ref: 'User',

    required: true,

  },

  my_books: [

    {

      type: mongo.Schema.Types.ObjectId,

      ref: 'Book',

      required: true,

    },

  ],

  total_price: {

    type: Number,

    required: true,

  },

});

const order_model = mongo.model('Order', order_schema);

module.exports = order_model;