const express = require("express");
const app = express();
let { people } = require("./data");

app.post("/testing/api/people", (req, res) => {
  const { id, name } = req.body;
  if (!name || !id) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide values" });
  }
  res.status(201).json({ success: true, person: name });
});
