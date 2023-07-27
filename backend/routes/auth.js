const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Add express.json() middleware to parse incoming JSON data
router.use(express.json());

// POST request to save user data
router.post('/', async (req, res) => {
  try {
    console.log(req.body);

    const user = new User(req.body);

    await user.save();

    res.send('User data saved successfully');
  } catch (error) {

    res.status(500).send('Error saving user data');
  }
});

module.exports = router;
