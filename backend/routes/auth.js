const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const router = express.Router();

// handles new user registration -- parses body and saves to database
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send("User created");
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Username already exists" });
    }
    res.status(500).json({ message: error.message });
  }
});

// compares entered credentials to database returning the respective output
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send("Authentication failed");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
