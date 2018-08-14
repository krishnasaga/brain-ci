const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Welcome to Brain CI"));

app.listen(process.env.PORT || 3000, () =>
  console.log("Brain CI is started and listening on port 3000!")
);
