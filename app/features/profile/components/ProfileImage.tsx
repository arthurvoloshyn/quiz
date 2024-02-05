import React, { FC } from "react";
import { View, Image, PixelRatio, ViewProps } from "react-native";

const width = 200;
const widthPx = PixelRatio.getPixelSizeForLayoutSize(width);

type Props = ViewProps;

export const ProfileImage: FC<Props> = (props) => (
  <View
    style={{ width, height: width }}
    className="rounded-full border-main border-10 overflow-hidden"
    {...props}
  >
    <Image
      style={{ width, height: width }}
      source={{ uri: `https://loremflickr.com/${widthPx}/${widthPx}` }}
    />
  </View>
);
