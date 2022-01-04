import React from "react";
import { shallow } from "enzyme";
import { IconCard } from "./IconCard";

describe("IconCard component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<IconCard />);
  });

  describe("Initial rendering", () => {
    it("should match the snapshot", () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it("should include a button", () => {
      expect(wrapper.find("button").length).toEqual(1);
    });

    it("should include correct props for button 1/4", () => {
      expect(wrapper.find("button").prop("className")).toEqual("icons__btn");
    });

    it("should include correct props for button 2/4", () => {
      expect(wrapper.find("button").prop("type")).toEqual("submit");
    });

    it("should include correct props for button 3/4", () => {
      expect(wrapper.find("button").prop("onClick")).toEqual(
        expect.any(Function)
      );
    });

    it("should include correct props for button 4/4", () => {
      expect(wrapper.find("button").prop("data-endpoint")).toEqual(undefined);
    });
  });

  /// not able to get this to work - raise help request at stackoverflow.
//   describe("functionality of IconCard", () => {
//     it("should call handleSubmit", () => {
//       console.log(wrapper.debug());
//       const event = {
//         preventDefault() {},
//         currentTarget: { dataset: "hot" },
//       };
//       const mockFn = jest.fn();
//       IconCard.handleSubmit = function() {
//         mockFn();
//       };
//       wrapper.find("button").simulate("click", event);
//       expect(mockFn).toHaveBeenCalledTimes(1);
//     });
//   });
// });

// describe("IconCard component will render & function correctly", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<IconCard />);
//   });

//   test("should render single wrapper div with specific class", () => {
//     expect(wrapper.find(".icons__btn")).toHaveLength(1);
//   });

//   test("should render hot IconCard when label prop is 'hot'", () => {
//     expect(wrapper.exists(".icons__btn-label")).toEqual(true);
//     wrapper.unmount();
//   });

//   test("handleSubmit is called", () => {
//     const logSpy = jest.spyOn(console, "log");
//     const event = {
//       preventDefault() {},
//       currentTarget: { dataset: "hot" },
//     };
//     //const wrapper = shallow(<SampleComponent></SampleComponent>);
//     const button = wrapper.find("button");
//     //expect(button.text()).toBe('Click Me');
//     button.simulate("click", event);
//     expect(logSpy).toBeCalledWith("hot");
//   });

// test("when button is click, correct endpoint is sent to handle function", () => {
//   const mockHandleSubmit = jest.fn();
//   const event = {
//     preventDefault() {},
//     currentTarget: { dataset: "hot" },
//   };
//   const component = shallow(<IconCard onClick={mockHandleSubmit} />);
//   component.find("button").simulate("click", event);
//   expect(mockHandleSubmit).toBeCalledWith("hot");
// });
//});
