import React from "react";
import { shallow } from "enzyme";
import { IconCard } from "./IconCard";

describe("IconCard component will render & function correctly", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<IconCard />);
  });

  test("should render single wrapper div with specific class", () => {
    expect(wrapper.find(".icons__btn")).toHaveLength(1);
  });
  test("should render correct label span", () => {
    //console.log(wrapper.debug());
    expect(wrapper.find(".icons__btn-label")).toHaveLength(1);
  });

  //   test("should have svg prop", () => {
  //     console.log(wrapper.props());
  //     //expect(wrapper.find("svg")).toHaveLength(1);
  //   });

  //   test("should render search field", () => {
  //     expect(wrapper.find(".search__form-input")).toHaveLength(1);
  //   });
});
