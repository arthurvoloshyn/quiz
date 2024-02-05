import { FC } from "react";
import { TextInput } from "./TextInput";
import { TextInputProps } from "react-native";

export const EmailInput: FC<TextInputProps> = (props) => (
  <TextInput
    keyboardType="email-address"
    autoComplete="email"
    placeholder="Enter email"
    {...props}
  />
);
