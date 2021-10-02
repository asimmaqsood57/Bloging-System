const express = require("express");

const app = express();

const cors = require("cors");

require("./db");
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/blog", require("./routes/blogs"));

app.listen(3001, () => {
  console.log("server running at port 3001");
});
