import { NavigationProp } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ImageProps } from "react-native";
import { HeaderButton } from "./components/HeaderButton";

type Props = {
  navigation: NavigationProp<{}>;
  onPress: () => void;
  imageSource: ImageProps["source"];
};

export const useHeaderRightButton = ({
  navigation,
  onPress,
  imageSource,
}: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={onPress} source={imageSource} />
      ),
    });
  }, [navigation, onPress, imageSource]);
};
