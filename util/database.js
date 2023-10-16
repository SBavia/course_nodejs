const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri = "";

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
