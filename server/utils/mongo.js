/*
* Title:  mongo.js
* Author: Professor Krasso
* Date: 07/02/2024
* Modified by: Phuong Tran
* Description: MongoDB set up
*/

"use strict";

const {
  MongoClient
} = require("mongodb");

const MONGO_URL = 'mongodb+srv://web450_user:<password>@bellevueuniversity.bj68fz9.mongodb.net/?retryWrites=true&w=majority&appName=BellevueUniversity';

const mongo = async (operations, next) => {

  try {
    console.log("Connecting to database");

    const client = await MongoClient.connect(MONGO_URL);

    const db = client.db("bcrs_DB");
    console.log("Connected to the database!");

    await operations(db);
    console.log("Operations was successful");

    client.close();
    console.log("Disconnected from the database");

  } catch (err) {
    const error = new Error("Error Connecting to database", err);
    error.status = 500;
    console.error("Error connecting to the database", err);
    next(error);
  }
}

module.exports = {
  mongo
};