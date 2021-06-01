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

const renderData = (data) => {
  document.querySelector("#output").value = `Agreement: ${data.agreement}
Irony: ${data.irony}
Confidence: ${data.confidence}`;
};

export { getData, postData, renderData };
