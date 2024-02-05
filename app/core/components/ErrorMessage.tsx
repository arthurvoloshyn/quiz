import { FC } from "react";
import { TextProps } from "react-native";
import { NormalText } from "./Text";

export const ErrorMessage: FC<TextProps> = (props) => (
  <NormalText className="text-red-400" {...props} />
);
