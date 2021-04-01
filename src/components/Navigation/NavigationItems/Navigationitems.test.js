import React from "react";
import { configure, shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

Enzyme.configure({ adapter: new Adapter() });

describe("<NavigationItems/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render two <NavigationItem/> elements if it is not authenticated ", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
  it("should render three <NavigationItem/> elements if it is authenticated ", () => {
    //  wrapper =shallow(<NavigationItems isAuthenticated/>);
    wrapper.setProps({ isAuthenticated: true });

    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it("should render logout <NavigationItem/> elements if it is authenticated ", () => {
    wrapper.setProps({ isAuthenticated: true });

    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
