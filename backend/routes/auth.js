const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const router = express.Router();

// Add express.json() middleware to parse incoming JSON data
router.use(express.json());

// POST request to save user data
router.post(
  '/',
  [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, password } = req.body;

      // Check if the user with the given email already exists
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      // Create a new User instance
      const user = new User({ name, email, password });

      // Save the user data to the database
      await user.save();

      res.send(req.body);
    } catch (error) {
      console.error('Error saving user data:', error.message);
      res.status(500).send('Error saving user data');
    }
  }
);

module.exports = router;