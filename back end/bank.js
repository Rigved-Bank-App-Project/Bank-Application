//import all functions
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
let mongoClient = require('mongodb').MongoClient;

let PORT = 3001;
let dbURL = "mongodb://localhost:27017";

//start the server
app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`);
});

//apply the middleware
app.use(cors());
app.use(bodyParser.json());

//create the the services for contact app
