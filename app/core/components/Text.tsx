import { FC } from "react";
import { Text, TextProps } from "react-native";

export const H1: FC<TextProps> = (props) => (
  <Text className="font-bold text-black text-h1" {...props} />
);

export const H2: FC<TextProps> = (props) => (
  <Text className="font-bold text-h2" {...props} />
);

export const NormalText: FC<TextProps> = (props) => <Text {...props} />;

export const SecondaryText: FC<TextProps> = (props) => (
  <Text className="text-gray-700" {...props} />
);
