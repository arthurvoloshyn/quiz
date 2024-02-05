import { ProportionalSpacer } from "@app/core/components/ProportionalSpacer";
import { ScreenContainer } from "@app/core/components/ScreenContainer";
import { SecondaryButton } from "@app/core/components/SecondaryButton";
import { H2 } from "@app/core/components/Text";
import { FC } from "react";
import { ProfileImage } from "../components/ProfileImage";
import { useNavigation } from "@react-navigation/native";
import { useHeaderTitle } from "@app/core/navigation/useHeaderTitle";

type ScreenViewProps = {
  onLogout: () => void;
  score: number;
  quizCount: number;
  email: string;
};

export const ProfileScreenView: FC<ScreenViewProps> = ({
  onLogout,
  score,
  quizCount,
  email,
}) => {
  const navigation = useNavigation();
  useHeaderTitle({ navigation, title: "Profile" });

  return (
    <ScreenContainer>
      <ProportionalSpacer ratioOfFreeSpaceAtTop={0.3}>
        <ProfileImage />
        <H2 className="text-text2 mt-4">{email}</H2>
        <H2 className="text-text2 mt-2">Quizzes finished: {quizCount}</H2>
        <H2 className="text-text2 mt-2">Total score: {score}</H2>
        <SecondaryButton className="mt-4" onPress={onLogout} title="Logout" />
      </ProportionalSpacer>
    </ScreenContainer>
  );
};
