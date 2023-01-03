
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://alihassan1407:Hassan140@nutritionalera.g9ughbo.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
//mongoose.connect(db);
// console.log(db)
//mongodb+srv://alihassan1407:Hassan140@nutritionalera.g9ughbo.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://alihassan1407:Hassan140@nutritionalera.g9ughbo.mongodb.net/?retryWrites=true&w=majority
const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });
        console.log("Mongo DB is connected")
    }catch(err){
        console.log("error in connection")
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;