const Task = require("../../model/Task.model");

const addTask = async (req, res) => {
    const { title, description, date, start, end , money} = req.body;
    try {
        const task = await Task.create({ title, description,date ,start, end, createdBy: req.id , money}); 
        res.status(200).json({ task }); 
    } catch (err) {
        console.log(err);
    }
};
module.exports = addTask;