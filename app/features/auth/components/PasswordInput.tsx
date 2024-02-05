import { FC } from "react";
import { TextInput } from "./TextInput";
import { TextInputProps } from "react-native";

export const PasswordInput: FC<TextInputProps> = (props) => (
  <TextInput
    autoComplete="password"
    placeholder="Enter password"
    secureTextEntry
    {...props}
  />
);
