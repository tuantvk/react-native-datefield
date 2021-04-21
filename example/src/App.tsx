import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import DateField, {
  MonthDateYearField,
  YearMonthDateField,
} from 'react-native-datefield';

const App = () => {
  return (
    <View style={styles.container}>
      <DateField onSubmit={(value) => console.log(value)} />
      <DateField
        styleInput={styles.underline}
        onSubmit={(value) => console.log(value)}
        maximumDate={new Date(2023, 3, 10)}
        minimumDate={new Date(2021, 4, 21)}
        handleErrors={() => console.log('ERROR')}
      />
      <DateField
        styleInput={styles.input}
        onSubmit={(value) => console.log('DateField', value)}
      />
      <DateField
        hideDate
        styleInput={[styles.input, styles.inputStart]}
        containerStyle={styles.containerStyle}
        onSubmit={(value) => console.log('DateField', value)}
      />
      <MonthDateYearField
        labelDate="Enter date"
        labelMonth="Enter month"
        labelYear="Enter year"
        containerStyle={styles.inputBackground}
        onSubmit={(value) => console.log('MonthDateYearField', value)}
      />
      <YearMonthDateField
        styleInput={styles.inputBorder}
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
    backgroundColor: '#f4f4f4',
    marginBottom: 20,
  },
  underline: {
    width: '30%',
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  containerStyle: {
    justifyContent: 'flex-start',
  },
  inputStart: {
    marginRight: 20,
  },
  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
    marginBottom: 20,
  },
  inputBackground: {
    borderRadius: 15,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 25,
    marginBottom: 20,
  },
});

export default App;
