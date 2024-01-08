const mongo = require('mongoose');

const { mongo_link } = require('../configure/configure');

mongo.connect(mongo_link, {

  useNewUrlParser: true,

  useUnifiedTopology: true,

});

const database = mongo.connection;

database.on('error', console.error.bind(console, 'database error:'));

database.once('open', () => {

  console.log('connected to database');

});

module.exports = database;