import { shallow } from "enzyme";
import App from "./App";

describe("Tests app.js", () => {
  // First test - aim to work from the most granular outward
  test("Render div with test text", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").text()).toBe("TEST");
  });
});
