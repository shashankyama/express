const mysql = require("mysql");
const data2 = require("./data2");

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Shashank@123",
  database: "usersdb",
  port: 3306,
  multipleStatements: true,
});

con.connect((err) => {
  if (err) throw err;
  con.query(
    "INSERT INTO users (id,name) VALUES ?",
    [data2.data],
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("Number of records inserted: " + result.affectedRows);
      }
    }
  );
  con.end(); // Close the connection when done
});
