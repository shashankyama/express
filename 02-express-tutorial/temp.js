const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Endpoint to handle new user registration
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // Validate user input (you should implement validation logic here)

  // Read the existing JSON file (if it exists)
  fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
      // If the file doesn't exist, start with an empty array
      const users = [];
      users.push({ username, email, password });

      // Write the new user data to the JSON file
      fs.writeFile("users.json", JSON.stringify(users), "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          res.status(500).json({ error: "Failed to register user" });
        } else {
          res.json({ message: "User registered successfully" });
        }
      });
    } else {
      // If the file exists, parse the JSON data
      const users = JSON.parse(data);

      // Check if the username or email already exists (you should implement this check)

      // Add the new user data to the existing data
      users.push({ username, email, password });

      // Write the updated data to the JSON file
      fs.writeFile("users.json", JSON.stringify(users), "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          res.status(500).json({ error: "Failed to register user" });
        } else {
          res.json({ message: "User registered successfully" });
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
