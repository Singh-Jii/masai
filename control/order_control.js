const order_service = require('../service/order_service');

const create_order = async (request, response, next) => {

  try {

    const { client_id, book_id } = request.body;

    const my_order = await order_service.create_order(client_id, book_id);

    response.status(201).json({ my_order });

  } 
  catch (er) {

    next(er);

  }

};

module.exports = {create_order};