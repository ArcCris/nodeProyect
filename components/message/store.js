/*const db = require("mongoose");
const Model = require("./model");

db.Promise = global.Promise;
db.connect("mongodb+srv://cris:qwertyuiop@cluster0-lsnhg.mongodb.net/admin?retryWrites=true&w=majority",{
    useNewUrlParser: true,
}).then(()=>{
    console.log("bd conectada con exito");
});*/


const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://cris:qwertyuiop@cluster0-lsnhg.mongodb.net/admin?retryWrites=true&w=majority";

const client = new MongoClient(url, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("arcris").collection("movies");

    client.close();
});



function addMessage(message) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("arcris");
        dbo.collection("movies").insertOne(message, function (err, res) {
            if (err) throw err;
            console.log("1 documento insertado");
            db.close();
        });
    });

    //list.push(message);
}

function getMessage() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("arcris");
            //Find all documents in the customers collection:
            var query = { message: "Si" };
            dbo.collection("movies").find(query).toArray(function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
                db.close();
            });

        });
    });
}

function getOneMessage() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("arcris");
            //Find all documents in the customers collection:
            dbo.collection("movies").find({}).toArray(function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
                db.close();
            });

        });
    });
}

module.exports = {
    add: addMessage,
    list: getMessage,
    listOne : getOneMessage,
}