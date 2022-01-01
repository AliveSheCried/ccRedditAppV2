import React from "react";
import { shallow } from "enzyme";
import { PostDetail } from "./PostDetail";

describe("PostDetail page must render", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PostDetail />);
  });

  test("Render Fragment component", () => {
    expect(wrapper.find("Fragment")).toHaveLength(1);
  });
  test("should include author class", () => {
    expect(wrapper.find(".post-meta__author")).toHaveLength(1);
  });
  test("should include time class", () => {
    expect(wrapper.find(".post-meta__time")).toHaveLength(1);
  });
  test("should include post title class", () => {
    expect(wrapper.find(".post-title")).toHaveLength(1);
  });
  test("should include img class", () => {
    expect(wrapper.find(".post-img")).toHaveLength(1);
  });
});
