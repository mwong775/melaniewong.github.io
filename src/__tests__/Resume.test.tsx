import * as React from "react";
import { shallow } from "enzyme";

import { Resume } from "../Components/Resume/Resume";

it("renders dat resume", () => {
    const result = shallow(<Resume />).contains(<h2 className="gradient-font">Resume</h2>);
    expect(result).toBeTruthy();
});