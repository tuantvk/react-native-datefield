import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DateMonthYearField from '../DateMonthYearField';

describe('DateField component', () => {
  it('should match snapshot', () => {
    const component = shallow(<DateMonthYearField />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Props', () => {
    it('testID', () => {
      const component = shallow(<DateMonthYearField testID="date_input" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('containerStyle', () => {
      const component = shallow(
        <DateMonthYearField containerStyle={{ marginVertical: 20 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('styleInput', () => {
      const component = shallow(
        <DateMonthYearField styleInput={{ fontSize: 15 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelDate', () => {
      const component = shallow(<DateMonthYearField labelDate="Input date" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelMonth', () => {
      const component = shallow(
        <DateMonthYearField labelMonth="Input month" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('labelYear', () => {
      const component = shallow(<DateMonthYearField labelYear="Input year" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('defaultValue', () => {
      const component = shallow(
        <DateMonthYearField defaultValue={new Date('2021-03-25')} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('onSubmit', () => {
      const component = shallow(<DateMonthYearField onSubmit={() => {}} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('disabled', () => {
      const component = shallow(<DateMonthYearField editable={false} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
