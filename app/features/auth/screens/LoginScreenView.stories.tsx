import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { LoginScreenView, LoginScreenViewProps } from "./LoginScreenView";

const LoginScreenViewMeta: ComponentMeta<typeof LoginScreenView> = {
  component: LoginScreenView,
};
export default LoginScreenViewMeta;

type LoginScreenViewStory = ComponentStoryObj<typeof LoginScreenView>;

const defaultArgs: Partial<LoginScreenViewProps> = {
  lastEmail: "last-email@test.com",
  onLoginPress: action("startLogin"),
  onSwitchToSignup: action("switchToSignup"),
};

export const Basic: LoginScreenViewStory = {
  args: {
    ...defaultArgs,
    isActive: false,
    error: undefined,
  },
};

export const InProgress: LoginScreenViewStory = {
  args: {
    ...defaultArgs,
    isActive: true,
    error: undefined,
  },
};

export const WithError: LoginScreenViewStory = {
  args: {
    ...defaultArgs,
    isActive: false,
    error: new Error("Something went wrong"),
  },
};
