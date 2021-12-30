import React from "react";
import { shallow } from "enzyme";
import { Navigation } from "./Navigation";

describe("Navigation page must render", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });
  //<Navigation /> will have 4 children components only;
  //The tests below will check that  both the relevant html and child comopnents are present;
  //Mounted tests?  TBC
  test("should render header html element", () => {
    expect(wrapper.find("header")).toHaveLength(1);
  });
  test("Render Logo component", () => {
    expect(wrapper.find("Logo")).toHaveLength(1);
  });
  test("Render Search component", () => {
    //console.log(wrapper.debug());
    expect(wrapper.find("Search")).toHaveLength(1);
  });
  test("Render QuickNav component", () => {
    //console.log(wrapper.debug());
    expect(wrapper.find("QuickNav")).toHaveLength(1);
  });
});
