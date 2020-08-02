import * as React from "react";
import { shallow } from "enzyme";

import { Resume } from "../Components/Resume/Resume";

describe('First React component test with Enzyme', () => {
    it('renders dat resume without crashing', () => {
       shallow(<Resume />);
     });
 });