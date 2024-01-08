## Masai Library Backend


# Problem Statement
The task is to create a backend for Masai Library that allows customers to browse and purchase books online.


# Technologies Used
Node.js
Express.js
MongoDB (Mongoose)


## Models

# User Model
{
  "_id": "ObjectId",
  "name": "String",
  "email": "String",
  "password": "String",
  "isAdmin": "Boolean"
}

# Book Model
{
  "_id": "ObjectId",
  "title": "String",
  "author": "String",
  "category": "String",
  "price": "Number",
  "quantity": "Number"
}

# Order Model
{
  "_id": "ObjectId",
  "user": { "type": "ObjectId", "ref": "User" },
  "books": [{ "type": "ObjectId", "ref": "Book" }],
  "totalAmount": "Number"
}



## API Routes

# POST
/api/register
Allows customers to register. Hashes the password on store.
201

# POST
/api/login
Allows customers to login. Returns a JWT token on login.
201

# GET
/api/books
Returns a list of all available books.
200

# GET
/api/books/:id
Returns the details of a specific book identified by its ID.
200

# GET
/api/books?category=fiction
Returns books based on the specified category (works with all categories).
200

# GET
/api/books?author=corey&category=fiction
Returns books based on author and category.
200

# POST
/api/books
Allows admin to add new books to the system. (Protected Route)
201

# PUT/PATCH
/api/books/:id
Allows admin to update the details of a specific book identified by its ID. (Protected Route)
204

# DELETE
/api/books/:id
Allows admin to delete a specific book identified by its ID. (Protected Route)
202

# POST
/api/order
Allows the customer to place an order for a list of books. (Protected Route)
201

# GET
/api/orders
Allows admin to view all orders with user and book details. (Protected Route)
200


## Note: Some routes are protected and require JWT token-based authorization for access.