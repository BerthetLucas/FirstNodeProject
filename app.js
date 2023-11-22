// get the client
const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 3000;


// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "dwwm_20_10_2023",
});

const displayResults = (request, reponse) => {
const limit = request.query.limit; 

    // simple query
  connection.query("SELECT * FROM pictures ORDER BY id DESC LIMIT " + limit, 
  function (err, results, fields) {
    reponse.send(results);
  });
};

app.get("/", displayResults);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


