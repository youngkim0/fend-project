// import { handleSubmit } from "./src/client/js/index.js";
const handleSubmit = require("../src/client/js/index.js");

describe("Testing the submit functionality", () => {
  //test("Testing the handleSubmit() function", () => {
  test("Testing handleSubmit fuction", () => {
    expect(
      handleSubmit("I am testing the API if the text is passed properly").text
    ).toMatch("I am testing the API if the text is passed properly");
  });
});
