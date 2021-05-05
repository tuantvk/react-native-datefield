import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const defaultProps: TextInputProps = {
  maxLength: 2,
  returnKeyType: 'next',
};

const Input = React.forwardRef(
  ({ style, ...attributes }: TextInputProps, ref: React.Ref<TextInput>) => {
    return (
      <TextInput
        {...attributes}
        ref={ref}
        blurOnSubmit={false}
        keyboardType="numeric"
        style={[styles.input, style]}
      />
    );
  }
);

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
  },
});

const areEqual = (prevProps: TextInputProps, nextProps: TextInputProps) => {
  return prevProps.value === nextProps.value;
};

Input.defaultProps = defaultProps;
export default React.memo(Input, areEqual);
