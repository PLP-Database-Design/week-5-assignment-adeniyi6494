// initializing dependeces/variables  

const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require ('dotenv');
const cors = require ('cors')

   app.use(express.json());
   app.use(cors());
   dotenv.config();

  //Connecting to database
const db = mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME
});
// checking if connection is working 
db.connect((err) =>  
  {if (err) return
  console.log('Error connecting to mysql db database:');
  //database connect successfully
  console.log("Connected to mysql database successful as id: ", db.
    threadId)
    app.set('view engine, ejs');
    app.set('views', __dirname + '/views');
    app.get('/data', (req, res) =>{
      db.query('SELECT *FROM patients', (err, results) => {
        if (err){
          console.log(err);
          res.statusMessage(500).send('Error retrieving data');
        } else {
          res.render('data', {results: results});
        }
      });
    }); 
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}` );
    // Sending Message to the browser
    console.log('Sending message to browser...');
    app.get('/',(req, res) => {
      res.send('server started successfully! Wedding can go On!!')
    })
  });
  }); 
// initializing dependeces/variables  

const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require ('dotenv');
const cors = require ('cors')

   app.use(express.json());
   app.use(cors());
   dotenv.config();

  //Connecting to database
const db = mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME
});
// checking if connection is working 
db.connect((err) =>  
  {if (err) return
  console.log('Error connecting to mysql db database:');
  //database connect successfully
  console.log("Connected to mysql database successful as id: ", db.
    threadId)
    app.set('view engine, ejs');
    app.set('views', __dirname + '/views');
    app.get('/data', (req, res) =>{
      db.query('SELECT *FROM patients', (err, results) => {
        if (err){
          console.log(err);
          res.statusMessage(500).send('Error retrieving data');
        } else {
          res.render('data', {results: results});
        }
      });
    }); 
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}` );
    // Sending Message to the browser
    console.log('Sending message to browser...');
    app.get('/',(req, res) => {
      res.send('server started successfully! Wedding can go On!!')
    })
  });
  }); 