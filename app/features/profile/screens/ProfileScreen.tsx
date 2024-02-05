import {
  useAuthStoreActions,
  useAuthStoreEmail,
} from "@app/features/auth/store/authStore";
import { ProfileScreenView } from "./ProfileScreenView";

export const ProfileScreen = () => {
  const authStoreActions = useAuthStoreActions();
  const email = useAuthStoreEmail();
  return (
    <ProfileScreenView
      email={email}
      quizCount={0}
      score={0}
      onLogout={authStoreActions.logout}
    />
  );
};
