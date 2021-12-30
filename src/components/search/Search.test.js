import React from "react";
import { shallow } from "enzyme";
import { Search } from "./Search";

describe("Search component will render & function correctly", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  test("should render search button", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
  test("should render svg", () => {
    expect(wrapper.find("svg")).toHaveLength(1);
  });
  test("should render correct svg", () => {
    //console.log(wrapper.debug());
    expect(wrapper.find(".search__form-svg")).toHaveLength(1);
  });
  test("should render search field", () => {
    expect(wrapper.find(".search__form-input")).toHaveLength(1);
  });
});
