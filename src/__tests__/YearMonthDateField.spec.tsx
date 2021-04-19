import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import YearMonthDateField from '../YearMonthDateField';

describe('YearMonthDateField component', () => {
  it('should match snapshot', () => {
    const component = shallow(<YearMonthDateField />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Props', () => {
    it('testID', () => {
      const component = shallow(<YearMonthDateField testID="date_input" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('containerStyle', () => {
      const component = shallow(
        <YearMonthDateField containerStyle={{ marginVertical: 20 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('styleInput', () => {
      const component = shallow(
        <YearMonthDateField styleInput={{ fontSize: 15 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelDate', () => {
      const component = shallow(<YearMonthDateField labelDate="Input date" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelMonth', () => {
      const component = shallow(
        <YearMonthDateField labelMonth="Input month" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelYear', () => {
      const component = shallow(<YearMonthDateField labelYear="Input year" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('defaultValue', () => {
      const component = shallow(
        <YearMonthDateField defaultValue={new Date('2021-03-25')} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('onSubmit', () => {
      const component = shallow(<YearMonthDateField onSubmit={() => {}} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('editable', () => {
      const component = shallow(<YearMonthDateField editable={false} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
