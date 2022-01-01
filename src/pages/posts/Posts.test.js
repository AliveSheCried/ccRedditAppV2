import React from "react";
import { shallow } from "enzyme";
import { Posts } from "./Posts";

describe("Post component will render & function correctly", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Posts />);
  });

  test("Render Card component", () => {
    //console.log(wrapper.debug());
    expect(wrapper.find("Card")).toHaveLength(1);
  });
  test("Render PostDetail component", () => {
    //console.log(wrapper.debug());
    expect(wrapper.find("PostDetail")).toHaveLength(1);
  });
});
