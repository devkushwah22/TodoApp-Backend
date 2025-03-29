const express = require("express");   // import express
const app = express();    // initiate server

// load config from env file
require("dotenv").config();   // iss line me humne env file me jo bhi config dala hai wo process me chala jaayga
const PORT = process.env.PORT || 4000;

//middlewares to parse json request body
app.use(express.json());  // Correctly use parentheses here

// import routes from TODO API
const todoRoutes = require("./routes/Todos");     //  just import krke laai hai todo routes

// mount the todo API routes
app.use("/api/v1", todoRoutes);     // ye humne todo routes ko append kr diya aur bhi kar sakte the

// start server
app.listen(PORT, () => {    // iss line me humne iss port par server start kr diya hai
    console.log(`Server Start Successfully at ${PORT}`);
});

// connect to the database
const dbConnect = require("./config/database");  // database ko import krke usko connect karwa diya 
dbConnect();   // last me dbConnect ko call kr diya

// Default Route
app.get("/", (req, res) => {
    res.send(`<h1> Hii, This is HomePage</h1>`);
});
