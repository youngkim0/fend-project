const projectDate = [];
const fetch = require("node-fetch");

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const api_url = "https://api.meaningcloud.com/sentiment-2.1?";

const app = express();
console.log(process.env.API_KEY);
const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`listening @ ${port}`);
});

const getData = async(url, () => {
  try {
    const response = await fetch(url);
  } catch (err) {
    console.log("Error(getData): " + err);
  }
});
