import 'jest'
import * as React from "react";
import { mount }            from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Hello } from '../src/components/Hello';

test("Dummy test", () => {
  const component = mount(<Hello compiler="TS" framework="React" />);
  expect(toJSON(component)).toMatchSnapshot();
})