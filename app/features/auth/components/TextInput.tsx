import { FC } from "react";
import { TextInput as RNTextInput, TextInputProps } from "react-native";

export const TextInput: FC<TextInputProps> = ({ style, ...otherProps }) => (
  <RNTextInput
    className="h-11 self-stretch bg-gray-200 px-2 py-2 mt-2 mx-4 mb-0"
    style={[{ borderRadius: 8 }, style]}
    placeholderTextColor="#666"
    autoCorrect={false}
    autoCapitalize="none"
    {...otherProps}
  />
);
