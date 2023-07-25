const express = require("express");
const app = express();
const fs = require("fs");
const { people } = require("./data2");

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

  fs.readFile("./data2", "utf8", (err, people) => {
    if (err) {
      const users = [];
      users.push({ id, name });
      fs.writeFile("./data2", JSON.stringify(users), "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          res.status(500).json({ error: "Failed to register user" });
        } else {
          res.json({ message: "User registered successfully" });
        }
      });
    } else {
      const users = JSON.parse(people);
      console.log("Hi", users);
      users.push({ id, name });
      console.log(users);
      fs.writeFile("./data2", JSON.stringify(users), "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          res.status(500).json({ error: "Failed to register user" });
        } else {
          res.json({ message: "User registered successfully", data: users });
        }
      });
    }
  });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
