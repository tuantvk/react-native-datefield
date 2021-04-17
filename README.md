# react-native-datefield

A simple React Native date input component

<p align="center">
  <img width="310" src="resource/example.png" alt="react-native-datefield" />
</p>


## Installation

```sh
yarn add react-native-datefield

# npm install react-native-datefield
```


## Usage

```js
import DateField from 'react-native-datefield';

<DateField onSubmit={(value) => console.log(value)} />

<DateField
  labelDate="Input date"
  labelMonth="Input month"
  labelYear="Input year"
  onSubmit={(value) => console.log(value)}
/>

<DateField
  disabled
  defaultValue={new Date()}
  styleInput={{ fontSize: 15 }}
  containerStyle={{ marginVertical: 20 }}
/>
```

## Props

| Property        | Default       | Option      | Description  |
| --------------- |:-------------:|:-----------:|:------------:|
| testID          | -             | string      | used to locate this view in end-to-end tests |
| containerStyle  | -             | ViewStyle   | styling for view containing the input |
| styleInput      | -             | TextStyle   | style that will be passed to the `style` props of the React Native `TextInput` |
| labelDate       | `Date`        | string      | add a label for date input |
| labelMonth      | `Month`       | string      | add a label for month input |
| labelYear       | `Year`        | string      | add a label for year input |
| defaultValue    | -             | Date        | an initial value that will change when the user starts typing |
| onSubmit        | -             | (Date) => {}| callback that is called when blur and return `Date` value |
| disabled        | `false`       | boolean     | disables the input component |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
