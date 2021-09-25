const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/blogingSystem")
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("some thing went wrong", err);
  });
