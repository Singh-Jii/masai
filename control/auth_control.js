const auth_service = require('../service/auth_service');

const my_reg = async (request, response, next) => {

  try {

    const { name, email, psswrd } = request.body;

    if (!name || !email || !psswrd) {

      return response.status(400).json({ error: 'main credentials are necessary.' });

    }

    const client = await auth_service.client_reg(name, email, psswrd);

    response.status(201).json({ client });

  } 
  catch (er) {

    next(er);

  }

};

const my_log = async (request, response, next) => {

  try {

    const { email, psswrd } = request.body;

    if (!email || !psswrd) {

      return response.status(400).json({ error: 'main credential are necessary.' });

    }

    const my_tok = await auth_service.client_login(email, psswrd);

    response.status(200).json({ my_tok });

  } 
  catch (er) {

    next(er);

  }

};

module.exports = {my_reg,my_log};