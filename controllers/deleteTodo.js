// import the model
const Todo = require("../models/todo");

// define route handlers
exports.deleteTodo = async (req, res) => {
  try {
   const {id} = req.params;   // ye humne databse me se id fetch krli, id schema ka part nahi hai isliye humne req.body nahi kiya

   await Todo.findByIdAndDelete(id);

   res.json({
    sucess: true,
    message: "TODO DELETED"
   })

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message, 
      message: "Server Error",
    });
  }
};
