const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'ghalibisagoodboy';
// Add express.json() middleware to parse incoming JSON data
router.use(express.json());

// POST request to save user data
//create a user post "/api/auth/createuser"
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 3 }),
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
        return res.status(400).json({ error: "Email already exists" });
      }
     const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash (req.body.password, salt);
  
user = await User.create({
  name: req.body.name,
  password: secPass,
  email: req.body.email,
});

const data = {
  user:{
    id: user.id
  }
}
const authtoken = jwt.sign(data, JWT_SECRET);

// res.json(user)
res.json({authtoken})
    }
     catch (error) {
      console.error("Error saving user data:", error.message);
      res.status(500).send(req.body);
    }
  }
);

module.exports = router;
