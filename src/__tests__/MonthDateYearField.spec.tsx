import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MonthDateYearField from '../MonthDateYearField';

describe('MonthDateYearField component', () => {
  it('should match snapshot', () => {
    const component = shallow(<MonthDateYearField />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Props', () => {
    it('testID', () => {
      const component = shallow(<MonthDateYearField testID="date_input" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('containerStyle', () => {
      const component = shallow(
        <MonthDateYearField containerStyle={{ marginVertical: 20 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('styleInput', () => {
      const component = shallow(
        <MonthDateYearField styleInput={{ fontSize: 15 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelDate', () => {
      const component = shallow(<MonthDateYearField labelDate="Input date" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelMonth', () => {
      const component = shallow(
        <MonthDateYearField labelMonth="Input month" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelYear', () => {
      const component = shallow(<MonthDateYearField labelYear="Input year" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('defaultValue', () => {
      const component = shallow(
        <MonthDateYearField defaultValue={new Date('2021-03-25')} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('onSubmit', () => {
      const component = shallow(<MonthDateYearField onSubmit={() => {}} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('editable', () => {
      const component = shallow(<MonthDateYearField editable={false} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('placeholderTextColor', () => {
      const component = shallow(
        <MonthDateYearField placeholderTextColor="#000000" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
