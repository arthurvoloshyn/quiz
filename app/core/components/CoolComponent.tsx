import React, { FC } from "react";
import { Text, View } from "react-native";

type Props = {
  text: string;
};

export const CoolComponent: FC<Props> = ({ text }) => {
  return (
    <View className="p-5 w-full h-full bg-yellow-200">
      <Text className="font-bold text-lg">{text}</Text>
    </View>
  );
};
