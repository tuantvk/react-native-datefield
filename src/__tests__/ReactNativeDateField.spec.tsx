import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReactNativeDateField from '../ReactNativeDateField';

describe('DateField component', () => {
  it('should match snapshot', () => {
    const component = shallow(<ReactNativeDateField />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Props', () => {
    it('testID', () => {
      const component = shallow(<ReactNativeDateField testID="date_input" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('containerStyle', () => {
      const component = shallow(
        <ReactNativeDateField containerStyle={{ marginVertical: 20 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('styleInput', () => {
      const component = shallow(
        <ReactNativeDateField styleInput={{ fontSize: 15 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelDate', () => {
      const component = shallow(
        <ReactNativeDateField labelDate="Input date" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelMonth', () => {
      const component = shallow(
        <ReactNativeDateField labelMonth="Input month" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelYear', () => {
      const component = shallow(
        <ReactNativeDateField labelYear="Input year" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('defaultValue', () => {
      const component = shallow(
        <ReactNativeDateField defaultValue={new Date('2021-03-25')} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('onSubmit', () => {
      const component = shallow(<ReactNativeDateField onSubmit={() => { }} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('disabled', () => {
      const component = shallow(<ReactNativeDateField disabled />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
