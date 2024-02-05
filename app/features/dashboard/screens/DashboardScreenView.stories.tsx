import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { DashboardScreenView } from "./DashboardScreenView";

const Stack = createNativeStackNavigator();

const DashboardScreenViewMeta: ComponentMeta<typeof DashboardScreenView> = {
  component: DashboardScreenView,
  decorators: [
    (Story) => (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DashboardScreenView" component={Story} />
        </Stack.Navigator>
      </NavigationContainer>
    ),
  ],
};

export default DashboardScreenViewMeta;

type DashboardScreenViewStory = ComponentStoryObj<typeof DashboardScreenView>;

export const Basic: DashboardScreenViewStory = {
  args: {
    onShowProfile: action("onShowProfile"),
    onStartQuiz: action("onStartQuiz"),
  },
};
