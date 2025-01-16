import express from "express";
import Section from "../models/Section.js";

const router = express.Router();

// Create Section
router.post('/', async (req, res) => {
  try {
    const section = await Section.create(req.body);
    res.status(201).json({ error: false, data: section, msg: 'Section created successfully' });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
});

// Get All Sections with Populated Course, Batch, and Teacher
router.get('/', async (req, res) => {
  try {
    const sections = await Section.find()
      .populate('course')
      .populate('batch')
      .populate('teacher');
    res.json({ error: false, data: sections });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
});

export default router;
