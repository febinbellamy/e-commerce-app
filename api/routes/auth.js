const router = require("express").Router();
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); //send back the saved user + the status code  
  } catch (err) {
    res.status(500).json(err); //send back the error message + the status code  
  } 
});

module.exports = router;
