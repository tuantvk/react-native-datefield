import React, { useRef, useState } from 'react';
import { View, StyleSheet, Keyboard, TextInput } from 'react-native';
import {
  int,
  formatYearDigits,
  getOnlyNumber,
  getDateDefault,
  daysInMonth,
} from './utils';
import Input from './Input';
import type { DateFieldProps } from './types';

const defaultProps: DateFieldProps = {
  labelDate: 'Date',
  labelMonth: 'Month',
  labelYear: 'Year',
  editable: true,
};

const MonthDateYearField: React.FunctionComponent<DateFieldProps> = ({
  testID,
  containerStyle,
  styleInput,
  labelDate,
  labelMonth,
  labelYear,
  defaultValue,
  onSubmit,
  editable,
}) => {
  const refYear = useRef<TextInput>(null);
  const refDate = useRef<TextInput>(null);
  const [dateValue, setDateValue] = useState(getDateDefault(defaultValue));

  const onChangeDate = (value: string) => {
    let date = getOnlyNumber(int(value) > 31 ? '31' : value);
    setDateValue((prev) => ({ ...prev, date }));
    if (date.length === 2) {
      refYear.current?.focus();
    }
  };

  const onChangeMonth = (value: string) => {
    let month = getOnlyNumber(int(value) > 12 ? '12' : value);
    setDateValue((prev) => ({
      ...prev,
      month,
      date: daysInMonth(dateValue.date, month),
    }));
    if (month.length === 2) {
      refDate.current?.focus();
    }
  };

  const onChangeYear = (value: string) => {
    let current: number = new Date().getFullYear();
    let year = getOnlyNumber(int(value) > current ? current.toString() : value);
    setDateValue((prev) => ({ ...prev, year }));
    if (year.length === 4) {
      onSubmitEditing(year);
      Keyboard.dismiss();
    }
  };

  const onSubmitEditing = (year: string) => {
    onSubmit &&
      onSubmit(new Date(`${year}-${dateValue.month}-${dateValue.date}`));
  };

  const onBlur = () => {
    let current = { ...dateValue };
    if (current.date === '0') {
      current.date = '01';
    }
    if (current.month === '0') {
      current.month = '01';
    }
    if (daysInMonth(current.date, current.month) !== current.date) {
      current.date = daysInMonth(current.date, current.month);
    }
    if (current.year === '0') {
      current.year = `${formatYearDigits(new Date().getFullYear())}`;
    }
    if (current.year.length > 1 && current.year.length < 4) {
      current.year = `${formatYearDigits(int(current.year))}`;
    }
    setDateValue(current);
    onSubmitEditing(current.year);
  };

  return (
    <View {...{ testID }} style={[styles.container, containerStyle]}>
      <Input
        value={dateValue.month}
        placeholder={labelMonth}
        style={styleInput}
        onChangeText={onChangeMonth}
        onSubmitEditing={() => refDate.current?.focus()}
        {...{ editable, onBlur }}
      />
      <Input
        ref={refDate}
        value={dateValue.date}
        placeholder={labelDate}
        style={styleInput}
        onChangeText={onChangeDate}
        onSubmitEditing={() => refYear.current?.focus()}
        {...{ editable, onBlur }}
      />
      <Input
        ref={refYear}
        value={dateValue.year}
        maxLength={4}
        returnKeyType="done"
        placeholder={labelYear}
        style={styleInput}
        onChangeText={onChangeYear}
        onSubmitEditing={() => Keyboard.dismiss()}
        {...{ editable, onBlur }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
  },
});

MonthDateYearField.defaultProps = defaultProps;
export default MonthDateYearField;
