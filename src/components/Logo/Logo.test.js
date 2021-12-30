import React from "react";
import { shallow } from "enzyme";
import { Logo } from "./Logo";

describe("Search module will render", () => {
  test("should render logo text and supporting html/css", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find("h1").html()).toEqual(
      '<h1><span class="logo__text--white">r/</span>reddit</h1>'
    );
  });
});
