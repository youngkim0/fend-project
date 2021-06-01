import "../style/main.scss";

const api = require("./api.js");

const post_url = "http://localhost:8080/post";
const get_url = "http://localhost:8080/get";

document.querySelector("#btn").addEventListener("click", async () => {
  const text = {
    text: document.querySelector("#input_form").value,
  };
  try {
    const response = await api.postData(post_url, text);
    const data = await api.getData(get_url);
    api.renderData(data);
  } catch (err) {
    console.log(err);
  }
});
