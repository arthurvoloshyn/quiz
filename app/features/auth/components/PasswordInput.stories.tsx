import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { PasswordInput } from "./PasswordInput";

const PasswordInputMeta: ComponentMeta<typeof PasswordInput> = {
  component: PasswordInput,
};
export default PasswordInputMeta;

type PasswordInputStory = ComponentStoryObj<typeof PasswordInput>;

export const Basic: PasswordInputStory = {};
