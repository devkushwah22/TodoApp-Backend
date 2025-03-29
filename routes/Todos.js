const express = require("express");
const router = express.Router();     // ye humne router reference  bana liya

// import controller
const {createTodo} = require("../controllers/createTodo");     
const {getTodo, getTodoById} = require("../controllers/getTodo");    
const {updateTodo} = require("../controllers/updateTodo");     
const {deleteTodo} = require("../controllers/deleteTodo")    



// define API routes - isiko route create karna kehte hai


router.post("/createTodo", createTodo);  // ye humne routes ko controller se jod diya
router.get("/getTodo", getTodo);  // ye humne routes ko controller se jod diya
router.get("/getTodo/:id", getTodoById);   // ye humne id se data fetch karne ke liye route banakar contoller se mapped kr dia
router.put("/updateTodo/:id", updateTodo)
router.delete("/deleteTodo/:id", deleteTodo)

// last me export
module.exports = router;

