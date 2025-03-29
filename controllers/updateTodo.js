// import the model
const Todo = require("../models/todo");

// define route handlers
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params; // schema me id nahi hai but database bnate time ban jaati hai, isliye req.params
    const { title, description } = req.body; // title aur description dono schema me the isliye req.body

    const todo = await Todo.findOneAndUpdate(
        { _id: id },
        { title, description, updatedAt: Date.now()},
        { new: true }
    );
    

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Update Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
