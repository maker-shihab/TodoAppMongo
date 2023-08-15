# TodoAppExpressMongo

Welcome to TodoAppExpressMongo! This is a basic backend project for beginners to learn about building a CRUD (Create, Read, Update, Delete) API using MongoDB, Mongoose, TypeScript, and Express with a modular pattern.

## Getting Started

These instructions will help you set up and run the project on your local machine for learning purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

Node.js (with npm)
MongoDB
Installation
Clone the repository to your local machine:

git clone https://github.com/maker-shihab/TodoAppMongo.git
cd TodoAppExpressMongo
Install the project dependencies:

npm install
Start the Express server:

```js
npm start
The server will run at http://localhost:5000 by default.
```

### Usage

- Open your web browser or API client (e.g., Postman) and access the following endpoints:

GET http://localhost:5000/ - Get a "Hello World!" response.
CRUD Operations:

GET http://localhost:5000/todos - Get all todos.
POST http://localhost:5000/todos - Create a new todo.
GET http://localhost:5000/todos/:id - Get a specific todo by ID.
PUT http://localhost:5000/todos/:id - Update a specific todo by ID.
DELETE http://localhost:5000/todos/:id - Delete a specific todo by ID.
Contributing
Contributions are welcome! If you'd like to contribute to this project, follow these steps:

### License

This project is licensed under the MIT License - see the LICENSE file for details.
