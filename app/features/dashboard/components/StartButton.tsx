import { H2 } from "@app/core/components/Text";
import { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export const StartButton: FC<Props> = ({ title, ...otherProps }) => (
  <TouchableOpacity
    className="bg-main w-24 h-24 rounded-full justify-center items-center"
    {...otherProps}
  >
    <H2 className="text-white">{title}</H2>
  </TouchableOpacity>
);
