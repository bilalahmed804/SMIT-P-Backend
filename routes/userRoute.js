import express from "express";
import User from "../models/user.js" ;
import course from "../course.js";

const router = express.Router();

// Create User
router.post('/', async (req, res) => {
  try {
    const user = await User.create(course.body);
    res.status(201).json({ error: false, data: user, msg: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
});

// Get All Users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json({ error: false, data: users });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
});

export default router;
