import React from "react";
import { shallow } from "enzyme";
import PostMeta from "./PostMeta";

describe("PostMeta component must render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PostMeta />);
  });

  it("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
