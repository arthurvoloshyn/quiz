import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { ProfileScreenView } from "./ProfileScreenView";

const Stack = createNativeStackNavigator();

const ProfileScreenViewMeta: ComponentMeta<typeof ProfileScreenView> = {
  component: ProfileScreenView,
  decorators: [
    (Story) => (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ProfileScreenView" component={Story} />
        </Stack.Navigator>
      </NavigationContainer>
    ),
  ],
};

export default ProfileScreenViewMeta;

type ProfileScreenViewStory = ComponentStoryObj<typeof ProfileScreenView>;

export const Basic: ProfileScreenViewStory = {
  args: {
    onLogout: action("onLogout"),
    email: "test@test.com",
    quizCount: 10,
    score: 100,
  },
};
