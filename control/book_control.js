const book_service = require('../service/book_service');

const get_all_book = async (request, response, next) => {

  try {

    const my_books = await book_service.get_all_book();

    response.status(200).json({ my_books });

  } 
  catch (er) {

    next(er);

  }

};

const get_book_id = async (request, response, next) => {

  try {

    const book_id = request.params.id;

    const my_book = await book_service.get_book_id(book_id);

    if (!my_book) {

      return response.status(404).json({ error: 'book not available' });

    }

    response.status(200).json({ my_book });

  } 
  catch (er) {

    next(er);

  }
  
};

module.exports = {get_all_book,get_book_id};