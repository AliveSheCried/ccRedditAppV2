import React from "react";
import { shallow } from "enzyme";
import { Menu } from "./Menu";

describe("Menu component will render & function correctly", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu />);
  });

  test("should render single ul with class", () => {
    expect(wrapper.find(".menu-full")).toHaveLength(1);
  });
  test("should render li", () => {
    expect(
      wrapper
        .find("ul")
        .childAt(0)
        .type()
    ).toEqual("li");
  });
  test("should render li", () => {
    expect(wrapper.find("li").children("button")).toHaveLength(4);
  });
});
