const jot = require('jsonwebtoken');

const { secret_key } = require('../configure/jwt');

const create_token = (client_id) => {

  const my_tok = jot.sign({ client_id }, secret_key, { expiresIn: '2h' });

  return my_tok;

};

const identify_token = (my_tok) => {

  try {

    const dt = jot.verify(my_tok, secret_key);

    return dt;

  } 
  catch (er) {

    return null;

  }
  
};

module.exports = {create_token,identify_token};
