import React, { createRef } from 'react';
import { View, Keyboard, TextInput } from 'react-native';
import {
  int,
  isValidDate,
  formatYearDigits,
  getOnlyNumber,
  getDateDefault,
  daysInMonth,
  dateInRange,
} from './utils';
import Input from './Input';
import type { DateFieldProps } from './types';
import styles from './styles';

type State = {
  date: string;
  month: string;
  year: string;
};

class YearMonthDateField extends React.Component<DateFieldProps, State> {
  static defaultProps = {
    labelDate: 'Date',
    labelMonth: 'Month',
    labelYear: 'Year',
    editable: true,
  };

  state = { ...getDateDefault(this.props.defaultValue) };

  refDate = createRef<TextInput>();
  refMonth = createRef<TextInput>();
  refYear = createRef<TextInput>();

  componentDidMount() {
    if (this.props.autoFocus) {
      this.refYear.current?.focus();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: DateFieldProps) {
    if (
      JSON.stringify(getDateDefault(nextProps.value)) !==
      JSON.stringify(getDateDefault(this.props.value))
    ) {
      const { date, month, year } = getDateDefault(nextProps.value);
      const nextState = {
        date: date ? date.padStart(2, '0') : '',
        month: month ? month.padStart(2, '0') : '',
        year,
      };
      this.setState(nextState);
    }
  }

  onChangeDate = (value: string) => {
    const date = getOnlyNumber(int(value) > 31 ? '31' : value);
    this.setState({ date }, () => {
      if (date.length === 2) {
        Keyboard.dismiss();
      }
    });
  };

  onChangeMonth = (value: string) => {
    const month = getOnlyNumber(int(value) > 12 ? '12' : value);
    this.setState({
      month,
      date: daysInMonth(this.state),
    });
    if (month.length === 2) {
      this.refDate.current?.focus();
    }
  };

  onChangeYear = (value: string) => {
    const year = getOnlyNumber(value);
    this.setState({ year });
    if (year.length === 4) {
      this.refMonth.current?.focus();
    }
  };

  onBlur = () => {
    const { maximumDate, minimumDate, handleErrors, onSubmit } = this.props;
    const current = { ...this.state };
    if (int(current.date) === 0) {
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
    if (int(current.year) === 0) {
      current.year = `${new Date().getFullYear()}`;
    }
    if (current.year.length > 1 && current.year.length < 4) {
      current.year = `${formatYearDigits(int(current.year))}`;
    }
    const value = new Date(
      int(current.year),
      int(current.month) - 1, // new Date(year, monthIndex, day)
      int(current.date)
    );
    if (current.date) {
      if (
        (minimumDate || maximumDate) &&
        !dateInRange(value, minimumDate, maximumDate)
      ) {
        handleErrors && handleErrors();
        this.setState({ date: '', month: '', year: '' });
      } else {
        if (isValidDate(value)) {
          onSubmit && onSubmit(value);
        }
        this.setState({ ...current });
      }
    }
  };

  render() {
    const { date, month, year } = this.state;
    const {
      testID,
      containerStyle,
      styleInput,
      styleInputYear,
      labelDate,
      labelMonth,
      labelYear,
      editable,
      placeholderTextColor,
    } = this.props;

    return (
      <View {...{ testID }} style={[styles.container, containerStyle]}>
        <Input
          ref={this.refYear}
          value={year}
          maxLength={4}
          placeholder={labelYear}
          style={styleInput}
          onChangeText={this.onChangeYear}
          onSubmitEditing={() => this.refMonth.current?.focus()}
          onBlur={this.onBlur}
          {...{ editable, placeholderTextColor }}
        />
        <Input
          ref={this.refMonth}
          value={month}
          placeholder={labelMonth}
          style={styleInput}
          onChangeText={this.onChangeMonth}
          onSubmitEditing={() => this.refDate.current?.focus()}
          onBlur={this.onBlur}
          {...{ editable, placeholderTextColor }}
        />
        <Input
          ref={this.refDate}
          value={date}
          returnKeyType="done"
          placeholder={labelDate}
          style={[styleInput, styleInputYear]}
          onChangeText={this.onChangeDate}
          onSubmitEditing={() => Keyboard.dismiss()}
          onBlur={this.onBlur}
          {...{ editable, placeholderTextColor }}
        />
      </View>
    );
  }
}

export default YearMonthDateField;
