const jwt = require("jsonwebtoken");

fetchuser = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    req.status(400).send("please enter a valid token");
  }

  try {
    const data = jwt.verify(token, "asimisadeveloper");

    req.user = data.user;
  } catch (error) {
    res.status(500).send("internal server error");
  }

  next();
};

module.exports = fetchuser;
