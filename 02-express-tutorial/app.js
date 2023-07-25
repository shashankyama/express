const express = require("express");
const app = express();
const fs = require("fs");
const { people } = require("./data2");
const insertData = require("./demo_db");
// const people = require("./routes/people");
// const auth = require("./routes/auth");

// //static assets
app.use(express.static("./methods-public"));
// //parse form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// app.use("/api/people", people);

// app.use("/login", auth);

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people/add", (req, res) => {
  const { id, name } = req.body;
  insertData(id, name);
  res.json({ message: "User registered successfully", data: users });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
