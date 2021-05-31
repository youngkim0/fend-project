import "./style/main.scss";

const api_url = "https://api.meaningcloud.com/sentiment-2.1?";
console.log("hello there");

const fectchData = async (url = "") => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error(fetchData): " + err);
  }
};

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const getData = async (url = "") => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error(getData): " + err);
  }
};

document.querySelector("#btn").addEventListener("click", () => {
  const text = document.querySelector("#input_form").value;
});
