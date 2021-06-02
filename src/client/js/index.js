import "../style/main.scss";

const api = require("./api.js");

const post_url = "http://localhost:8080/post";
const get_url = "http://localhost:8080/get";

const handleSubmit = async (input) => {
  if (input === "")
    document.querySelector("#input_form").placeholder =
      "Please enter a valid input";
  else {
    const textInput = {
      text: input,
    };
    try {
      const response = await api.postData(post_url, textInput);
      const data = await api.getData(get_url);
      api.renderData(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
};

document.querySelector("#btn").addEventListener("click", async () => {
  handleSubmit(document.querySelector("#input_form").value);
});

export { handleSubmit };
