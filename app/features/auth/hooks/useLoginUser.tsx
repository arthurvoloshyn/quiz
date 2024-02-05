import { useState } from "react";
import { useAuthStoreActions } from "../store/authStore";

export const useLoginUser = () => {
  const authStoreActions = useAuthStoreActions();
  const [inProgress, setInProgress] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setError(undefined);
      setInProgress(true);
      await authStoreActions.login(email, password);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    } finally {
      setInProgress(false);
    }
  };

  return { loginUser, inProgress, error };
};
