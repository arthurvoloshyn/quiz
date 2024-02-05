import { FC } from "react";
import { LoginScreenView } from "./LoginScreenView";
import { useAuthStoreLastEmail } from "../store/authStore";
import { useLoginUser } from "../hooks/useLoginUser";
import { Alert } from "react-native";

export const LoginScreen: FC = () => {
  const lastEmail = useAuthStoreLastEmail();
  const { loginUser, inProgress, error } = useLoginUser();

  return (
    <LoginScreenView
      lastEmail={lastEmail}
      isActive={inProgress}
      error={error}
      onLoginPress={loginUser}
      onSwitchToSignup={() => {
        Alert.alert("Invite only", "Please ask your physician for an invite");
      }}
    />
  );
};
