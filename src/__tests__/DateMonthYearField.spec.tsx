import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DateMonthYearField from '../DateMonthYearField';

describe('DateMonthYearField component', () => {
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

    it('editable', () => {
      const component = shallow(<DateMonthYearField editable={false} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('hideDate', () => {
      const component = shallow(<DateMonthYearField hideDate />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('hideDate - check total length TextInput', () => {
      const component = shallow(<DateMonthYearField hideDate />);
      expect(component.find('Memo(ForwardRef)')).toHaveLength(2);
    });

    it('placeholderTextColor', () => {
      const component = shallow(
        <DateMonthYearField placeholderTextColor="#000000" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('maximumDate', () => {
      const component = shallow(
        <DateMonthYearField maximumDate={new Date(2023, 3, 12)} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('minimumDate', () => {
      const component = shallow(
        <DateMonthYearField minimumDate={new Date(2020, 3, 12)} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('handleErrors', () => {
      const component = shallow(<DateMonthYearField handleErrors={() => {}} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
