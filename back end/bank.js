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

app.get("/customer/:id/:password" , (request , response) =>{
    let id = parseInt(request.params.id);
    let password = request.params.password;
    mongoClient.connect(dbURL , {useNewUrlParser: true} , (error , client) =>{
        if(error) {
            throw error;
        }else {
            let db = client.db("mydb");
            db.collection("customer").findOne({_id:id , password : password})
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

// show customer deatils works
app.get("/customer/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL, {useNewUrlParser: true}, (error, client) => {
        if(error) {
            throw error;
        } else {
            let db = client.db("mydb");
            db.collection('customer').findOne({_id: id})
            .then((doc) => {
                if(doc != null) {
                    response.json(doc);
                } else {
                    response.status(409).json({"message": `Sorry wrong id ${id}`})
                }
                client.close();
            });
        }
    });
});
// 3-> update transactions ---> /customer/:id/transfer ---> working
app.post("/customer/:id/tran", (request, response) => {
    let id = parseInt(request.params.id);
    let transfer = request.body;
    let ref_num =   Math.random().toString().slice(2,14);
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        } else {

            let db = client.db("mydb");
            let current_date = new Date().toUTCString();
            db.collection("tran").insertOne({ customer_id: id, transfer, current_date, ref_num })
                .then((doc) => {
                    response.json(doc);
                    client.close();
                });
        }
    });
});

// update the password of a customer works
app.put("/customer/:id/password/:pass", (request, response) => {
    let id = parseInt(request.params.id);
    let password = request.params.pass;
    mongoClient.connect(dbURL, {useNewUrlParser: true}, (error, client) => {
        if (error) {
            throw error;
        } else {
            let db = client.db('mydb');
            db.collection('customer').updateOne({_id: id}, {$set : {password: password}})
            .then((doc) => {
                if(doc != null) {
                    response.json(doc);
                } else {
                    response.json({"message":`Sorry wrong id ${id} `})
                }
                client.close();
            });
        }
    });
});