import React, { FC } from "react";
import { View, ViewProps } from "react-native";

type Props = ViewProps & {
  ratioOfFreeSpaceAtTop: number;
};

export const ProportionalSpacer: FC<Props> = ({
  ratioOfFreeSpaceAtTop,
  children,
  ...otherProps
}) => (
  <View className="flex-1 self-stretch items-center" {...otherProps}>
    <View style={{ flex: ratioOfFreeSpaceAtTop }} />
    {children}
    <View className="flex-1" />
  </View>
);
