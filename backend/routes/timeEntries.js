const express = require('express');
const TimeEntry = require('../models/TimeEntry');
const router = express.Router();

// router handler for new entry post requests 
router.post('/', async (req, res) => {
  const { user, project, taskDescription, hours } = req.body;
  const newEntry = new TimeEntry({ user, project, taskDescription, hours });
  try {
    await newEntry.save();
    res.status(201).send("Entry added");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// router handler for post reading
router.get('/', async (req, res) => {
  try {
    const entries = await TimeEntry.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
