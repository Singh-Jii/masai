const my_jot = require('../utility/utility');

const authen = (request, response, next) => {

  try {

    const my_tok = request.header('Authorization');

    if (!my_tok) {

      return response.status(401).json({ error: 'token not available' });

    }

    const dt = my_jot.identify_token(my_tok);

    if (!dt) {

      return response.status(401).json({ error: 'token not available' });

    }

    request.client = dt;

    next();

  } 
  catch (er) {

    next(er);

  }
  
};

module.exports = {authen};
