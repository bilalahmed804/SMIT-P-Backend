import express from "express";
import Batch from "../models/Batch.js";

const router = express.Router();

// Create Batch
router.post('/', async (req, res) => {
  try {
    const batch = await Batch.create(req.body);
    res.status(201).json({ error: false, data: batch, msg: 'Batch created successfully' });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
});

// Get All Batches with Populated Courses
router.get('/', async (req, res) => {
  try {
    const batches = await Batch.find().populate('course');
    res.json({ error: false, data: batches });
  } catch (error) {
    res.status(500).json({ error: true, msg: error.message });
  }
});

export default router;
