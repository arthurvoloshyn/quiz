import { FC } from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import { NormalText } from "./Text";
import cx from "clsx";

type Props = TouchableOpacityProps & {
  isInProgress: boolean;
  title: string;
};

export const PrimaryButton: FC<Props> = ({
  isInProgress,
  title,
  disabled,
  ...otherProps
}) => (
  <TouchableOpacity
    className={cx(
      "flex-row items-center justify-center bg-main rounded-2 py-3 px-4",
      isInProgress && "opacity-60"
    )}
    disabled={isInProgress || disabled}
    {...otherProps}
  >
    {isInProgress ? <ActivityIndicator className="mr-2" color="white" /> : null}
    <NormalText className="text-white text-normal">{title}</NormalText>
  </TouchableOpacity>
);
