const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user.id
  });

  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.user.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  task.title = req.body.title || task.title;
  await task.save();

  res.status(200).json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.user.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await task.deleteOne();

  res.status(200).json({ message: "Task deleted" });
};