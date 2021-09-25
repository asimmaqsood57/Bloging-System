const express = require("express");

const router = express.Router();

const User = require("../models/Users");

// creating a new user -> Sign up

router.post("/createuser", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const newUser = await user.save();

    res.send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// fetching a new user

router.get("/fetchuser", async (req, res) => {
  try {
    const usersData = await User.find();

    res.status(200).json(usersData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// updating the user

module.exports = router;
