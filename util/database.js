const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

// const uri = "mongodb+srv://admin:pgZzV5DW0KevCQ9o@cluster0.ovhxueq.mongodb.net/test?retryWrites=true&w=majority"
const uri =
  "mongodb+srv://admin:2Nn55knHaNhWN0F0@cluster0.zxtdm2i.mongodb.net/?retryWrites=true&w=majority";

const mongoConnect = (cb) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("Connected");
      cb(client);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

module.exports = mongoConnect;
