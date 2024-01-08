const book_model = require('../model/book_model');

const get_all_book = async () => {

  try {

    const my_books = await book_model.find();

    return my_books;

  } 
  catch (er) {

    throw er;

  }

};

const get_book_id = async (book_id) => {

  try {

    const my_book = await book_model.findById(book_id);

    return my_book;

  } 
  catch (er) {

    throw er;

  }

};

const plus_book = async (title, author, category, price, quantity) => {

  try {

    const my_new_book = new book_model({title,author,category,price,quantity});

    await my_new_book.save();

    return my_new_book;

  } 
  catch (er) {

    throw er;

  }

};

const chnge_book_id = async (book_id, chnge_info) => {

  try {

    const chnge_book = await book_model.findByIdAndUpdate(book_id, chnge_info, { new: true });

    return chnge_book;

  } 
  catch (er) {

    throw er;

  }

};

const del_book_id = async (book_id) => {

  try {

    const del_book = await book_model.findByIdAndRemove(book_id);

    return del_book;

  } 
  catch (er) {

    throw er;

  }

};

module.exports = {get_all_book,get_book_id,plus_book,chnge_book_id,del_book_id};