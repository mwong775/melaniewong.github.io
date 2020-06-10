import * as React from "react";
import { shallow } from "enzyme";

import { Photos } from "../Components/Photos/Photos";

it("renders dat photo grid", () => {
    const result = shallow(<Photos />).contains(<div className="description">Surprisingly decent photos taken with an iPhone</div>);
    expect(result).toBeTruthy();
});