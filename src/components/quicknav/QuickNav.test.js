import React from "react";
import { shallow } from "enzyme";
import { QuickNav } from "./QuickNav";

describe("Tests QuickNav", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<QuickNav />);
  });

  test("Render outter div with class icons", () => {
    expect(wrapper.find(".icons")).toHaveLength(1);
  });
  test("Render Search module", () => {
    expect(wrapper.find("IconCard")).toHaveLength(4);
  });
});
