// import the model
const Todo = require("../models/todo");

// define route handlers
exports.createTodo = async (req, res) => {
    try {
        // Request body se title aur description extract karna
        const { title, description } = req.body;

        // Database mein entry insert karna aur response ka intezaar karna
        const response = await Todo.create({ title, description });

        // Agar entry successfully create ho gayi, toh response bhejna
        res.status(200).json({
            success: true,
            data: response,
            message: "Created Entry Successfully",
        });
    } catch (err) {
        // Agar koi error aata hai toh catch block mein handle karna
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
};
