// Global variable to store
let projectData = {};
const fetch = require("node-fetch");
const async = require("async");
const path = require("path");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const api_url = "https://api.meaningcloud.com/sentiment-2.1?";
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../dist/")));

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`listening @ ${port}`);
});

app.post("/post", async (req, res) => {
  projectData = await getData(req.body.text);
  res.send("Done");
});

app.get("/get", (req, res) => {
  res.json(projectData);
});

const getData = async (text) => {
  const url =
    api_url +
    "key=" +
    process.env.API_KEY +
    "&of=json&lang=en&model=general&txt=" +
    text;
  try {
    const response = await fetch(url);
    const data = await response.json();
    let texts = "";

    for (const list of data.sentence_list) texts = texts.concat(list.text);

    currentData = {
      text: texts.toString(),
      agreement: data.agreement,
      irony: data.irony,
      confidence: data.confidence,
    };

    return currentData;
  } catch (err) {
    console.log("Error(getData): " + err);
  }
};
