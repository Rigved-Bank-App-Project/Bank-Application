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

// show customer info
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
// 3-> update transactions 
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


  // transaction table
app.get("/tran/customer/:id", (request, response) => {

    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        } else {
            let db = client.db("mydb");
            let users = []
            let cursor = db.collection("tran").find({ customer_id: id });
            cursor.forEach((doc, err) => {
                if (err)
                    throw err;
                users.push(doc);
            }, () => {
                response.json(users);
                client.close();
            });
        }
    });
});


// // 4-> show transaction details based on customer id
// app.get("/tran/customer/:id", (request, response) => {
  
//     let id = parseInt(request.params.id);
//     mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
//         if (error) {
//             throw error;
//         } else {
//             let db = client.db("mydb");
//             let users = []
//             let cursor = db.collection("tran").find({ customer_id: id });
//             cursor.forEach((doc, err) => {
//                 if (err)
//                     throw err;
//                 users.push(doc);
//             }, () => {
//                 response.json(users);
//                 client.close();
//             });
//         }
//     });
//   });


// update the password of a customer works
// app.put("/customer/:id/password/:pass", (request, response) => {
//     let id = parseInt(request.params.id);
//     let password = request.params.pass;
//     mongoClient.connect(dbURL, {useNewUrlParser: true}, (error, client) => {
//         if (error) {
//             throw error;
//         } else {
//             let db = client.db('mydb');
//             db.collection('customer').updateOne({_id: id}, {$set : {password: password}})
//             .then((doc) => {
//                 if(doc != null) {
//                     response.json(doc);
//                 } else {
//                     response.json({"message":`Sorry wrong id ${id} `})
//                 }
//                 client.close();
//             });
//         }
//     });
// });


//////////////////////////////

  // 5-> update balance on basis of account number ----> Working
  
//   app.put("/customer/:id/debited/:balance", (request, response) => {
//     mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
//         if (error) {
//             throw error
//         } else {
//             let id = parseInt(request.params.id);
//             let balance = parseInt(request.params.balance);
//             let db = client.db("mydb");
//             db.collection("customer").updateOne({ _id: id }, { $inc: { ac_balance: -balance } }).then((doc) => {
//                 response.status(200).json(doc);
//                 client.close();
//             })
//         }
//     })
//   })
  
  // 6-> update the password of a customer ---> working
  
//   app.put("/customer/:id/password/:pass", (request, response) => {
//     let id = parseInt(request.params.id);
//     let pass = (request.params.pass);
//     mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
//         if (error) {
//             throw error;
//         } else {
//             let db = client.db('mydb');
//             db.collection('customer').updateOne({ _id: id }, { $set: { password: pass } })
  
//             db.collection("customer").findOne({ _id: id })
  
//                 .then((doc) => {
//                     if (doc != null) {
//                         response.json(doc);
//                     } else {
//                         response.json({ "message": `Sorry wrong id ${id} ` })
//                     }
//                     client.close();
//                 });
//         }
//     });
//   });
  
//   // 7 -> update the transaction password by id: ----> working
//   app.put("/customer/:id/transpass/:pass", (request, response) => {
//     let id = parseInt(request.params.id);
//     let pass = request.params.pass;
//     mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
//         if (error) {
//             throw error;
//         } else {
//             let db = client.db("mydb");
//             db.collection("customer").updateOne({ _id: id }, { $set: { transaction_pass: pass } })
//                 .then((doc) => {
//                     if (doc != null) {
//                         response.json(doc);
//                     } else {
//                         response.json({ "message": `Sorry wrong id ${id} ` })
//                     }
//                     client.close();
//                 });
//         }
//     });
//   });