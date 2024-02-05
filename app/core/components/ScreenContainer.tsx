import { FC, PropsWithChildren } from "react";
import { SafeAreaView } from "react-native";

// TODO: this should also include error boundary

export const ScreenContainer: FC<PropsWithChildren> = ({ children }) => (
  <SafeAreaView className="flex-1">{children}</SafeAreaView>
);
