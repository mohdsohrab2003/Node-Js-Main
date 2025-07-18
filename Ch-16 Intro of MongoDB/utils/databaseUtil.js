const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;

const MongoUrl =
  "mongodb+srv://sohrabmohd2003:Sohrabmohd%402003@airbnb.bwowdtu.mongodb.net/?retryWrites=true&w=majority&appName=Airbnb";

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(MongoUrl)
    .then((client) => {
      console.log("Connected to MongoDB");
      callback();
      _db = client.db("airbnb");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
};

const getDb = () => {
  if (!_db) {
    throw new Error("No database found!");
  }
  return _db;
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
