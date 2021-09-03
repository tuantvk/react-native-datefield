import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export type DateFieldProps = {
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
  styleInput?: StyleProp<TextStyle>;
  styleInputYear?: StyleProp<TextStyle>;
  labelDate?: string;
  labelMonth?: string;
  labelYear?: string;
  defaultValue?: Date;
  value?: Date | null;
  onSubmit?(value: Date): void;
  editable?: boolean;
  hideDate?: boolean;
  placeholderTextColor?: string;
  maximumDate?: Date;
  minimumDate?: Date;
  handleErrors?(): void;
  autoFocus?: boolean;
};
