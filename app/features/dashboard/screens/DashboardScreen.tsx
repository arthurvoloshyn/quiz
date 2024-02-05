import { Alert } from "react-native";
import { DashboardScreenView } from "./DashboardScreenView";
import { useNavigation } from "@react-navigation/native";

export const DashboardScreen = () => {
  const navigation = useNavigation();
  return (
    <DashboardScreenView
      onShowProfile={() => navigation.navigate("Profile")}
      onStartQuiz={() => Alert.alert("start quiz")}
    />
  );
};
