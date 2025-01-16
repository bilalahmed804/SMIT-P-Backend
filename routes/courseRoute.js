import express from "express";
import Course from "../models/Course.js";

const router = express.Router();



// Create Course
router.post('/', async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({ error: false, data: course, msg: 'Course created successfully' });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
});

// Get All Courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({ error: false, data: courses });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
});

export default router;
