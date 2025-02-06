const Task = require("../../model/Task.model");
const Volunteer = require("../../model/Volunteer.model");
const completeTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { currentStat: "completed" },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    const acceptedBy = updatedTask.acceptedBy;
    const volunteer = await Volunteer.findById(acceptedBy);
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    else
    {
      volunteer.earnings += updatedTask.money;
      await volunteer.save();
      res
        .status(200)
        .json({ message: "Task completed successfully"});
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error completing task", error: error.message });
  }
};

module.exports = { completeTask };