import { FC } from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacityProps,
  TextProps,
  ImageProps,
} from "react-native";
import clsx from "clsx";

type ButtonProps = TouchableOpacityProps & {
  isInProgress?: boolean;
  title: string;
  labelStyle?: TextProps["style"];
  disabled?: boolean;
  icon?: any;
  iconStyle?: ImageProps["style"];
};

export const SecondaryButton: FC<ButtonProps> = ({
  isInProgress,
  title,
  onPress,
  labelStyle,
  disabled,
  icon,
  iconStyle,
  style,
  ...otherProps
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled || isInProgress}
    className={clsx("flex-row items-center justify-center p-2", {
      "opacity-60": disabled || isInProgress,
    })}
    style={style}
    {...otherProps}
  >
    {isInProgress ? <ActivityIndicator className="mr-1" /> : null}
    {icon ? <Image source={icon} style={iconStyle} /> : null}
    <Text
      className="text-main text-button"
      style={labelStyle}
      disabled={disabled}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
