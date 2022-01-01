import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Tests app.js", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  // First test - aim to work from the most granular outward
  test("Render Logo module", () => {
    expect(wrapper.find("Navigation")).toHaveLength(1);
  });
  test("Render Posts module", () => {
    expect(wrapper.find("Posts")).toHaveLength(3);
  });
});
