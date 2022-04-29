//import all functions
let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
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

//create the the services for bank application

// login service
// app.get("/bank/login/:id/:password", (request,response)=>{
//     let id = parseInt(request.params.id);
//     let pass = request.params.password;
//     mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
//         if(error){
//             throw error;
//         }
//         else{
//             let db =  client.db("mydb");
//             db.collection("customer").findOne({_id:id, password:pass})
//             .then((doc) => {
//                 if(doc != null){
//                     response.json(doc)
//                 }else{
//                     response.status(404).json({"message":`Sorry id and  password doesn't match`})
//                 }
//                 client.close();
//             })
//         }
//     })
// })

app.get("/customer/:cust_id/:pass" , (request , response) =>{
    let cust_id = parseInt(request.params.id);
    let pass = request.params.password;
    mongoClient.connect(dbURL , {useNewUrlParser: true} , (error , client) =>{
        if(error) {
            throw error;
        }else {
            let db = client.db("mydb");
            db.collection("customer").findOne({_id:cust_id , password : pass})
            .then((doc) => {
                if (doc!=null) {
                    response.json(doc)
                }else{
                    response.status(404).json({"message":`sorry id or password is wrong`} )
                }
                client.close();
            });
        }
    });
});