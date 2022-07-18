import User from "../models/user.js";

export const controller = {
  getUser: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
  saveUser: async (req, res) => {
    const user = new User(req.body);
    try {
      const insertUser = await user.save();
      res.status(201).json(insertUser);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const updateUser = await User.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.status(201).json(updateUser);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const deleteUser = await User.deleteOne({ _id: req.params.id });
      res.status(201).json(deleteUser);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
};
