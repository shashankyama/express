const mysql = require("mysql");

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Shashank@123",
  database: "usersdb",
  port: 3306,
  multipleStatements: true,
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected");
});

function insertData(id, name) {
  const userData = [[id, name]];
  con.query(
    "INSERT INTO users (id, name) VALUES ?",
    [userData],
    function (err, result) {
      if (err) {
        console.error("Error inserting data:", err);
      } else {
        console.log("Number of records inserted: " + result.affectedRows);
      }
    }
  );
}

module.exports = insertData;
