import React, { createRef } from 'react';
import { View, Keyboard, TextInput } from 'react-native';
import {
  int,
  isValidDate,
  formatYearDigits,
  getOnlyNumber,
  getDateDefault,
  daysInMonth,
} from './utils';
import Input from './Input';
import type { DateFieldProps } from './types';
import styles from './styles';

type State = {
  date: string;
  month: string;
  year: string;
};

class DateMonthYearField extends React.Component<DateFieldProps, State> {
  static defaultProps = {
    labelDate: 'Date',
    labelMonth: 'Month',
    labelYear: 'Year',
    editable: true,
  };

  state = { ...getDateDefault(this.props.defaultValue) };

  refMonth = createRef<TextInput>();
  refYear = createRef<TextInput>();

  onChangeDate = (value: string) => {
    const date = getOnlyNumber(int(value) > 31 ? '31' : value);
    this.setState({ date });
    if (date.length === 2) {
      this.refMonth.current?.focus();
    }
  };

  onChangeMonth = (value: string) => {
    const month = getOnlyNumber(int(value) > 12 ? '12' : value);
    this.setState({
      month,
      date: daysInMonth(this.state),
    });
    if (month.length === 2) {
      this.refYear.current?.focus();
    }
  };

  onChangeYear = (value: string) => {
    const current: number = new Date().getFullYear();
    const year = getOnlyNumber(
      int(value) > current ? current.toString() : value
    );
    this.setState({ year });
    if (year?.length === 4) {
      Keyboard.dismiss();
    }
  };

  onBlur = () => {
    const current = { ...this.state };
    if (int(current.date) === 0 || this.props.hideDate) {
      current.date = '01';
    }
    if (current.date.length === 1) {
      current.date = current.date.padStart(2, '0');
    }
    if (int(current.month) === 0) {
      current.month = '01';
    }
    if (current.month.length === 1) {
      current.month = current.month.padStart(2, '0');
    }
    if (daysInMonth(current) !== current.date) {
      current.date = daysInMonth(current);
    }
    if (int(current.year) === 0) {
      current.year = `${new Date().getFullYear()}`;
    }
    if (current.year.length > 1 && current.year.length < 4) {
      current.year = `${formatYearDigits(int(current.year))}`;
    }
    const value = new Date(`${current.year}-${current.month}-${current.date}`);
    if (current.year && isValidDate(value)) {
      this.props.onSubmit && this.props.onSubmit(value);
    }
    this.setState({
      date: current.date,
      month: current.month,
      year: current.year,
    });
  };

  render() {
    const { date, month, year } = this.state;
    const {
      testID,
      containerStyle,
      styleInput,
      labelDate,
      labelMonth,
      labelYear,
      editable,
      hideDate,
    } = this.props;

    return (
      <View {...{ testID }} style={[styles.container, containerStyle]}>
        {!hideDate && (
          <Input
            value={date}
            placeholder={labelDate}
            style={styleInput}
            onChangeText={this.onChangeDate}
            onSubmitEditing={() => this.refMonth.current?.focus()}
            onBlur={this.onBlur}
            {...{ editable }}
          />
        )}
        <Input
          ref={this.refMonth}
          value={month}
          placeholder={labelMonth}
          style={styleInput}
          onChangeText={this.onChangeMonth}
          onSubmitEditing={() => this.refYear.current?.focus()}
          onBlur={this.onBlur}
          {...{ editable }}
        />
        <Input
          ref={this.refYear}
          value={year}
          maxLength={4}
          returnKeyType="done"
          placeholder={labelYear}
          style={styleInput}
          onChangeText={this.onChangeYear}
          onSubmitEditing={() => Keyboard.dismiss()}
          onBlur={this.onBlur}
          {...{ editable }}
        />
      </View>
    );
  }
}

export default DateMonthYearField;
