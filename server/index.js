const express = require("express");

const app = express();

require("./db");
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/blog", require("./routes/blogs"));

app.listen(3001, () => {
  console.log("server running at port 3001");
});
