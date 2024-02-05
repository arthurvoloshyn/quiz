import { getAsset } from "@app/core/assets/getAsset";
import { ProportionalSpacer } from "@app/core/components/ProportionalSpacer";
import { ScreenContainer } from "@app/core/components/ScreenContainer";
import { useHeaderRightButton } from "@app/core/navigation/useHeaderRightButton";
import { useHeaderTitle } from "@app/core/navigation/useHeaderTitle";
import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { StartButton } from "../components/StartButton";

type ScreenViewProps = {
  onStartQuiz: () => void;
  onShowProfile: () => void;
};

export const DashboardScreenView: FC<ScreenViewProps> = ({
  onStartQuiz,
  onShowProfile,
}) => {
  const navigation = useNavigation();
  useHeaderRightButton({
    navigation,
    onPress: onShowProfile,
    imageSource: getAsset("user"),
  });
  useHeaderTitle({ navigation, title: "Dashboard" });

  return (
    <ScreenContainer>
      <ProportionalSpacer ratioOfFreeSpaceAtTop={1.7}>
        <StartButton onPress={onStartQuiz} title="Start" />
      </ProportionalSpacer>
    </ScreenContainer>
  );
};
