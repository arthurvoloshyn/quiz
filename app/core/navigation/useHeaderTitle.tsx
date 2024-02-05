import { NavigationProp } from "@react-navigation/native";
import { useLayoutEffect } from "react";

type Args = {
  navigation: NavigationProp<{}>;
  title: string;
};

export const useHeaderTitle = ({ navigation, title }: Args) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [navigation, title]);
};
