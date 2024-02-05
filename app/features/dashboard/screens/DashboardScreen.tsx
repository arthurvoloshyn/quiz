import { Alert } from "react-native";
import { DashboardScreenView } from "./DashboardScreenView";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<{ Profile: undefined }>;

export const DashboardScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <DashboardScreenView
      onShowProfile={() => navigation.navigate("Profile")}
      onStartQuiz={() => Alert.alert("start quiz")}
    />
  );
};
