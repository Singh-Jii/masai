const client_service = require('../service/client_service');

const get_client_id = async (request, response, next) => {

  try {

    const client_id = request.params.id;

    const client = await client_service.get_client_id(client_id);

    if (!client) {

      return response.status(404).json({ error: 'client not present' });

    }

    response.status(200).json({ client });

  } 
  catch (er) {

    next(er);

  }

};

module.exports = {get_client_id};