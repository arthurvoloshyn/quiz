import {
  ImageButton,
  ImageButtonProps,
} from "@app/core/components/ImageButton";
import { COLORS } from "@app/core/components/theme";
import { FC } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageDefaultStyle: { tintColor: COLORS.main },
});

type Props = ImageButtonProps;

export const HeaderButton: FC<Props> = ({ imageStyle, ...props }) => (
  <ImageButton
    className="w-8 h-8 items-center justify-center"
    {...props}
    imageStyle={[styles.imageDefaultStyle, imageStyle]}
  />
);
