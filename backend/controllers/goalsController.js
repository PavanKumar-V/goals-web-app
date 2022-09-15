const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalsModel");

// @des Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ goals });
});

// @des Set goals
// @route POST /api/goals
// @access Private
const setGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
};

// @des Update  goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
};

// @des Delete  goals
// @route PUT /api/goals/:id
// @access Private
const deleteGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    throw new Error("Goal not found");
  }

  const removeGoal = await Goal.findByIdAndRemove(req.params.id);
  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
