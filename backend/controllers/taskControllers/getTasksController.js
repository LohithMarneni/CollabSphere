const Task = require("../../model/Task.model");
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().exec();
        res.status(200).json(tasks);
    } catch (err) {
        console.log(err);
    }
};
module.exports = getTasks;