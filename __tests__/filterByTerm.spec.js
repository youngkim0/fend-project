function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [{ id: 1, url: "http://localhost:8080" }];

    const output = [{ id: 1, url: "http://localhostL8080" }];

    expect(filterByTerm(input, "link")).toEqual(output);
  });
});
