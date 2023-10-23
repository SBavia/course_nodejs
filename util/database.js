const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri = process.env.MONGODB_URI;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      cb();
    })
    .catch((err) => {
      console.log("err", err);
      throw err;
    });
};

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
