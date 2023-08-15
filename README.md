# TodoAppExpressMongo

Welcome to TodoAppExpressMongo! This project serves as a fundamental backend template for beginners to learn the construction of a CRUD (Create, Read, Update, Delete) API using MongoDB, Mongoose, TypeScript, and Express, employing a modular pattern.

## Getting Started

These instructions will help you set up and run the project on your local machine for educational purposes.

### Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (with npm)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation and Execution

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/maker-shihab/TodoAppMongo.git
   cd TodoAppExpressMongo
   ```
2. Install the project dependencies:
    ```sh
    npm install
    ```
3. Start the Express server:
    ```sh
    npm start
    ```
The server will be accessible at http://localhost:5000 by default.
## Usage
You can interact with the API using your web browser or API client (e.g., Postman). Access the following endpoints:

- GET http://localhost:5000/ - Retrieve a "Hello World!" response.
- CRUD Operations:
    - GET http://localhost:5000/todos - Fetch all todos.
    - POST http://localhost:5000/todos - Create a new todo.
    - GET http://localhost:5000/todos/:id - Retrieve a specific todo by ID.
    - PUT http://localhost:5000/todos/:id - Update a specific todo by ID.
    - DELETE http://localhost:5000/todos/:id - Delete a specific todo by ID.
## Contributing
Contributions are welcome! If you wish to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name.
3. Commit your changes: git commit -am 'Add some feature'.
4. Push to the branch: git push origin feature/your-feature-name.
5. Submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
