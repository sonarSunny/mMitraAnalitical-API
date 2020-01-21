const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var mysql = require('mysql'); 
var config = require('./config/database'); 
var con = mysql.createConnection(config.database);
// create express app
const app = express();
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
//const gethelpController =require('./routes/gethelpRoutes')
const getDataController =require('./routes/getDataRoutes')
//const getreferralController = require('./routes/getreferralRoutes')
//const registrationController = require('./routes/registrationRoutes')


app.use('/api/getdata',getDataController)

  
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});