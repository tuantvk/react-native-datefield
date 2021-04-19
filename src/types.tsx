import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export type DateFieldProps = {
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
  styleInput?: StyleProp<TextStyle>;
  labelDate?: string;
  labelMonth?: string;
  labelYear?: string;
  defaultValue?: Date;
  onSubmit?(value: Date): void;
  editable?: boolean;
  hideDate?: boolean;
  placeholderTextColor?: string;
};
