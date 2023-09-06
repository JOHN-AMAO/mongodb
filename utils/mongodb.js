const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/mydatabase"; // Replace with your MongoDB URI

const client = new MongoClient(uri, { useNewUrlParser: true });

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { client, connect };
