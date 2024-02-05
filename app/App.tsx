import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigator } from "@app/features/home/navigation/HomeNavigator";
import { useAuthStoreToken } from "@app/features/auth/store/authStore";
import { AuthNavigator } from "@app/features/auth/navigation/AuthNavigator";

export const App = () => {
  const token = useAuthStoreToken();
  return (
    <NavigationContainer>
      {token ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
