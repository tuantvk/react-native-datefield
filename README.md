<h1 align="center">react-native-datefield</h1>

<br />

<p align="center">
  A simple React Native date input component
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-datefield"><img src="https://img.shields.io/npm/v/react-native-datefield.svg?style=flat-square"></a>
  <a href="https://github.com/tuantvk/react-native-datefield"><img src="https://img.shields.io/github/stars/tuantvk/react-native-datefield?style=flat-square"></a>
  <a href="https://github.com/tuantvk/react-native-datefield"><img src="https://img.shields.io/github/issues/tuantvk/react-native-datefield?style=flat-square"></a>
  <a href="https://github.com/tuantvk/react-native-datefield"><img src="https://img.shields.io/github/forks/tuantvk/react-native-datefield?style=flat-square"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square"></a>
</p>

<br />

![react-native-datefield](resource/example.png)


## Installation

```sh
yarn add react-native-datefield

or

npm install react-native-datefield
```


## Usage

```js
import DateField from 'react-native-datefield';
```

or

```js
const DateField = require('react-native-datefield');
```

```js
<DateField
  styleInput={styles.inputBorder}
  onSubmit={(value) => console.log(value)}
/>

<DateField
  labelDate="Input date"
  labelMonth="Input month"
  labelYear="Input year"
  defaultValue={new Date()}
  styleInput={styles.inputBorder}
  onSubmit={(value) => console.log(value)}
/>

<DateField
  editable={false}
  styleInput={styles.inputBorder}
  maximumDate={new Date(2023, 3, 10)}
  minimumDate={new Date(2021, 4, 21)}
  handleErrors={() => console.log('ERROR')}
/>

const styles = StyleSheet.create({
  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
    marginBottom: 20,
  },
});
```

## Props

| Property        | Default   | Option      | Description  |
| --------------- |:---------:|:-----------:|:------------:|
| testID          | -         | string      | used to locate this view in end-to-end tests |
| containerStyle  | -         | ViewStyle   | styling for view containing the input |
| styleInput      | -         | TextStyle   | style that will be passed to the `style` props of the React Native `TextInput` |
| styleInputYear  | -         | TextStyle   | style only for year input |
| labelDate       | `Date`    | string      | add a label for date input |
| labelMonth      | `Month`   | string      | add a label for month input |
| labelYear       | `Year`    | string      | add a label for year input |
| value           | -         | Date        | defines the date value used in the component |
| defaultValue    | -         | Date        | an initial value that will change when the user starts typing |
| onSubmit        | -         | (Date) => {}| callback that is called when blur and return `Date` value [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format|
| editable        | `true`    | boolean     | if `false`, text is not editable |
| autoFocus       | `false`   | boolean     | if `true`, auto focus to the first input |
| hideDate        | `false`   | boolean     | if `true`, `Date` input is not display, only support `DateField` |
| placeholderTextColor | -    | string      | the text color of the placeholder string |
| maximumDate     | -         | Date        | defines the maximum date that can be filled |
| minimumDate     | -         | Date        | defines the minimum date that can be filled |
| handleErrors    | -         | void        | this is called when the user fills the date invalid |


## Example

#### MonthDateYearField

Display fields according to `month -> date -> year`.

```js
import { MonthDateYearField } from 'react-native-datefield';

<MonthDateYearField
  labelDate='Enter date'
  labelMonth='Enter month'
  labelYear='Enter year'
  containerStyle={styles.containerStyle}
  onSubmit={(value) => console.log('MonthDateYearField', value)}
/>

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 15,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 25,
    marginBottom: 20,
  },
});
```

#### YearMonthDateField

Display fields according to `year -> month -> date`.

```js
import { YearMonthDateField } from 'react-native-datefield';

<YearMonthDateField
  styleInput={styles.inputBorder}
  onSubmit={(value) => console.log('YearMonthDateField', value)}
/>

const styles = StyleSheet.create({
  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
    marginBottom: 20,
  },
});
```


#### momentjs

Use [momentjs](https://momentjs.com) parse value from `onSubmit` function.

Example:

```js
import DateField from 'react-native-datefield';
import moment from 'moment';

<DateField
  onSubmit={(value) => console.log(moment(value).format("DD/MM/YYYY"))}
/>
```

View more example [App.tsx](https://github.com/tuantvk/react-native-datefield/blob/master/example/src/App.tsx).


## Running the example app

1. Run `yarn` in repo root
2. Run `yarn example android` or `yarn example ios`
3. Run `yarn example start` to start Metro Bundler


## Troubleshooting

#### When using `maximumDate` or `minimumDate` return wrong value

If you use `maximumDate` or `minimumDate`, you should set default date to `new Date()`.

Example:

```js
// don't
<DateField
  ...
  maximumDate={new Date()}
  minimumDate={new Date()}
/>
```

```js
// do
<DateField
  ...
  maximumDate={new Date(2023, 3, 10)} // new Date(year, monthIndex, day)
  minimumDate={new Date(2021, 4, 21)} // new Date(year, monthIndex, day)
/>
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.


## Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/tuantvk">
        <img src="https://avatars.githubusercontent.com/u/30563960?v=4?s=64" width="64px;" alt="tuantvk" />
        <br />
        <sub><b>tuantvk</b></sub>
      </a>
      <br />
      <a href="https://github.com/tuantvk/react-native-datefield/commits?author=tuantvk" title="Code">💻</a>
      <a href="#" title="Maintenance">🚧</a>
      <a href="https://github.com/tuantvk/react-native-datefield/commits?author=tuantvk" title="Documentation">📖</a>
      <a href="#" title="Examples">💡</a>
    </td>
    <td align="center">
      <a href="https://github.com/maxiromanoff">
        <img src="https://avatars.githubusercontent.com/u/52922596?v=4" width="64px;" alt="maxiromanoff" />
        <br />
        <sub><b>maxiromanoff</b></sub>
      </a>
      <br />
      <a href="#" title="Documentation">📖</a>
    </td>
  </tr>
</table>

## License

[MIT](LICENSE)
