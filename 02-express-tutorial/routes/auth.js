const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  if (name) {
    res.status(200).send(name);
  } else {
    res
      .status(401)
      .send(`<p>Please provide a valid value"</p><a href="/">Login</a>`);
  }
});

module.exports = router;
