import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export type TextInputProps = React.ComponentPropsWithRef<typeof TextInput> & {
  innerRef?: (ref?: TextInput | null) => void;
};

const defaultProps: TextInputProps = {
  maxLength: 2,
  returnKeyType: 'next',
};

const Input: React.FunctionComponent<TextInputProps> = ({
  innerRef,
  style,
  ...attributes
}) => (
  <TextInput
    {...attributes}
    ref={innerRef}
    blurOnSubmit={false}
    keyboardType="numeric"
    style={[styles.input, style]}
  />
);

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
  },
});

Input.defaultProps = defaultProps;
export default Input;
