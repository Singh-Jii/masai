const bc = require('bcrypt');

const my_jot = require('../utility/utility');

const client_reg = async (name, email, psswrd) => {

  try {

    const available_client = await client_model.findOne({ email });

    if (available_client) {

      throw new Error('email registration.');

    }

    const hash_psswrd = await bc.hash(psswrd, 10);

    const client = new client_model({name,email,psswrd: hash_psswrd});

    await client.save();

    return { _id: client._id, name: client.name, email: client.email, isAdmin: client.isAdmin };

  } 
  catch (er) {

    throw er;

  }

};

const client_login = async (email, psswrd) => {

  try {

    const client = await client_model.findOne({ email });

    if (!client) {

      throw new Error('wrong credential.');

    }

    const is_psswrd_crrct = await bc.compare(psswrd, client.psswrd);

    if (!is_psswrd_crrct) {

      throw new Error('wrong credential.');

    }

    const my_tok = my_jot.create_token(client._id);

    return my_tok;

  } 
  catch (er) {

    throw er;

  }

};

module.exports = {client_reg,client_login};