import "./style/main.scss";

const post_url = "http://localhost:8080/post";
const get_url = "http://localhost:8080/get";

const postData = async (url = "", data = {}) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log("Error:(postData) " + err);
  }
};

const getData = async (url = "") => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error(getData): " + err);
  }
};

document.querySelector("#btn").addEventListener("click", async () => {
  const text = {
    text: document.querySelector("#input_form").value,
  };
  try {
    const response = await postData(post_url, text);
    const data = await getData(get_url);
    renderData(data);
  } catch (err) {
    console.log(err);
  }
});

function renderData(data) {
  document.querySelector("#output").value = `Agreement: ${data.agreement}
Irony: ${data.irony}
Confidence: ${data.confidence}`;
}
