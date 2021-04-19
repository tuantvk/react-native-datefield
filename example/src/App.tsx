import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import DateField, {
  MonthDateYearField,
  YearMonthDateField,
} from 'react-native-datefield';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <DateField onSubmit={(value) => console.log(value)} />
      <DateField
        labelDate="Input date"
        labelMonth="Input month"
        labelYear="Input year"
        onSubmit={(value) => console.log(value)}
      />
      <DateField
        editable={false}
        defaultValue={new Date()}
        styleInput={styles.input}
      />
      <DateField defaultValue={new Date()} styleInput={styles.input} /> */}
      <DateField
        styleInput={styles.input}
        onSubmit={(value) => console.log('DateField', value)}
      />
      <MonthDateYearField
        styleInput={styles.input}
        onSubmit={(value) => console.log('MonthDateYearField', value)}
      />
      <YearMonthDateField
        styleInput={styles.input}
        onSubmit={(value) => console.log('YearMonthDateField', value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    width: '30%',
    borderRadius: 8,
    backgroundColor: '#ededed',
    marginBottom: 20,
  },
  underline: {
    marginHorizontal: 30,
  },
  inputUnderline: {
    width: '30%',
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
  },
});

export default App;
