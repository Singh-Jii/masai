const exp = require('express');

const bp = require('body-parser');

const cr = require('cors');

const database = require('./configure/db');

const error = require('./utility/error');

const application = exp();

const port = process.env.port || 8000;

application.use(cr());

application.use(bp.json());

database.once('open', () => {

  console.log('connected to database');

});

application.use('/api/auth', require('./route/auth_route'));

application.use('/api/books', require('./route/book_routes'));

application.use('/api/orders', require('./route/order_route'));

application.use('/api/users', require('./route/client_route'));

application.use(error);

application.listen(port, () => {

  console.log(`${port}`);
  
});
