// import the model
const Todo = require("../models/todo");

// define route handlers
exports.getTodo = async (req, res) => {
    try {
     
        // fetch all todo items from database
        const todos = await Todo.find();

        res.status(200)
        .json({
            success: true,
            data: todos,
            message: "Entire Todo data is fetched",
        })

    } catch (err) {
      console.error(err);
      res.status(500)
      .json({
        success: false,
        error: err.message,
        message: "Server Error ",

      })
    }
};

// ye hum id se get karne  ke liye banaaynge
exports.getTodoById = async (req, res) => {
  try {
    // extract todo items on basis of id's
    const id = req.params.id;    // request ke parameters me jaao aur uski id nikaal kar aao
    // Check if ID is a valid MongoDB ObjectId
   
    const todo = await Todo.findById(id);

    // aur agar data nahi mil paaya to
    if(!todo){
      return res.status(404).json({
        success: false,
        message: "No Data is Found!!",
      })
    }
    // agar data mil gaya to
    return res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data Successfully fetched`,
    })
  }  

  // agar koi error aa gaya hota to, wohi same sabke liye
   catch(err) {  
    console.error(err);
    res.status(500)
    .json({
      success: false,
      error: err.message,    
      message: "Server Error ",

    })
   }
}