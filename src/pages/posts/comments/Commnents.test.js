import React from "react";
import { shallow } from "enzyme";
import { Comments } from "./Comments";

describe("Tests Comments", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Comments />);
  });

  test("Render outer div with class comments", () => {
    expect(wrapper.find(".comments")).toHaveLength(1);
  });
  test("Render paragraph for heading", () => {
    expect(wrapper.find(".comments__title")).toHaveLength(1);
  });
  test("Render user who created comment", () => {
    expect(wrapper.find(".comments__detail-user")).toHaveLength(1);
  });
  test("Render time comment created", () => {
    expect(wrapper.find(".comments__detail-time")).toHaveLength(1);
  });
  test("Render comment", () => {
    expect(wrapper.find(".comments__detail-text")).toHaveLength(1);
  });
});
