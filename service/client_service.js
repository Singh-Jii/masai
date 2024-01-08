const client_model = require('../model/client_model');

const get_client_id = async (client_id) => {

  try {

    const client = await client_model.findById(client_id);

    return client;

  } 
  catch (er) {

    throw er;

  }

};

module.exports = {get_client_id};