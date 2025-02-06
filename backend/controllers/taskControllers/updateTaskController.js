const Task = require("../../model/Task.model");
// Update Task
const updateTask = async (req, res) => {
  try {
    const taskId  = req.params.id;
    const updates = req.body;
    const updatedTask = await Task.findByIdAndUpdate(taskId, updates, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error: error.message });
  }
};
module.exports = updateTask;