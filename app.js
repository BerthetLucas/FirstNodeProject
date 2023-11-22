// get the client
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "dwwm_20_10_2023",
});

const displayResults = (request, reponse) => {

const limit = !isNaN(request.query.limit) ? parseInt(request.query.limit) : 2;  

    // simple query
  connection.query("SELECT * FROM pictures ORDER BY id DESC LIMIT " + limit, 
  function (err, results, fields) {
    reponse.send(results);
    console.log(err); 
  });
};


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


app.use('/',express.static("public")); 
app.get("/api", displayResults);


app.post('/api',(request,reponse)=>{

console.log(request.body.title); 
console.log(request.body.image); 
console.log(request.body.description); 

connection.query(`INSERT INTO pictures (title,image,description) VALUES (?,?,?)`, [request.body.title, request.body.image, request.body.description],

function (err, results, fields) {
  reponse.send(results);
  console.log(err); 
});

}); 