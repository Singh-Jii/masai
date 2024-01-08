const order_model = require('../model/order_model');

const book_model = require('../model/book_model');

const client_model = require('../model/client_model');

const create_order = async (clint_id, book_id) => {

  try {

    const client = await client_model.findById(clint_id);

    if (!client) {

      throw new Error('Client not present.');

    }

    const my_books = await book_model.find({ _id: { $in: book_id } });

    if (my_books.length !== book_id.length) {

      throw new Error('one more book not present.');

    }

    const total_price = my_books.reduce((add, my_book) => add + my_book.price, 0);

    const my_new_order = new order_model({

      client: client._id,

      my_books: book_id,

      total_price });

    await my_new_order.save();

    return my_new_order;

  } 
  catch (er) {

    throw er;

  }

};

const get_all_order = async () => {

  try {

    const my_orders = await order_model.find().populate('user').populate('books');

    return my_orders;

  } 
  catch (er) {

    throw er;

  }

};

module.exports = {create_order,get_all_order};