import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  int,
  formatYearDigits,
  getOnlyNumber,
  getDateDefault,
  daysInMonth,
} from './utils';

export type DateFieldProps = {
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
  styleInput?: StyleProp<TextStyle>;
  labelDate?: string;
  labelMonth?: string;
  labelYear?: string;
  defaultValue?: Date;
  onSubmit?(value: Date): void;
  disabled?: boolean;
};

const defaultProps: DateFieldProps = {
  labelDate: 'Date',
  labelMonth: 'Month',
  labelYear: 'Year',
};

const ReactNativeDateField: React.FunctionComponent<DateFieldProps> = ({
  testID,
  containerStyle,
  styleInput,
  labelDate,
  labelMonth,
  labelYear,
  defaultValue,
  onSubmit,
  disabled,
}) => {
  const refMonth = useRef<TextInput>(null);
  const refYear = useRef<TextInput>(null);
  const [dateValue, setDateValue] = useState(getDateDefault(defaultValue));

  const onChangeDate = (value: string) => {
    let date = getOnlyNumber(int(value) > 31 ? '31' : value);
    setDateValue((prev) => ({ ...prev, date }));
    if (date.length === 2) {
      refMonth.current?.focus();
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
      refYear.current?.focus();
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
      <TextInput
        value={dateValue.date}
        maxLength={2}
        blurOnSubmit={false}
        returnKeyType="next"
        keyboardType="numeric"
        editable={!disabled}
        placeholder={labelDate}
        style={[styles.input, styleInput]}
        onChangeText={onChangeDate}
        onBlur={onBlur}
        onSubmitEditing={() => refMonth.current?.focus()}
      />
      <TextInput
        ref={refMonth}
        value={dateValue.month}
        maxLength={2}
        blurOnSubmit={false}
        returnKeyType="next"
        keyboardType="numeric"
        editable={!disabled}
        placeholder={labelMonth}
        style={[styles.input, styleInput]}
        onChangeText={onChangeMonth}
        onBlur={onBlur}
        onSubmitEditing={() => refYear.current?.focus()}
      />
      <TextInput
        ref={refYear}
        value={dateValue.year}
        maxLength={4}
        blurOnSubmit={false}
        returnKeyType="done"
        keyboardType="numeric"
        editable={!disabled}
        placeholder={labelYear}
        style={[styles.input, styleInput]}
        onChangeText={onChangeYear}
        onBlur={onBlur}
        onSubmitEditing={() => Keyboard.dismiss()}
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

ReactNativeDateField.defaultProps = defaultProps;
export default ReactNativeDateField;
