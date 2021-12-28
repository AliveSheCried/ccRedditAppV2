jest.mock("./fetchData");

const { fetchData } = require("./fetchData");

describe("Test connectivity to reddit api", () => {
  test("should return subreddits", async () => {
    const data = await fetchData("subreddits");
    expect(data.endpoint).toEqual("/r/pics");
  });
});
