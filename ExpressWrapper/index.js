const express = require("express");
const createHandler = require("azure-function-express").createHandler;

// Initialize express app
const app = express();

// Setup your express routes

app.use('/__/auth', express.static(path.join(__dirname, 'auth')));
app.use("/__/firebase", express.static("firebase"));

// More routes and middleware can be added here

// Binds the express app to an Azure Function handler
module.exports = createHandler(app);
