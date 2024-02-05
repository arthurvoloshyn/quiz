import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { EmailInput } from "./EmailInput";

const EmailInputMeta: ComponentMeta<typeof EmailInput> = {
  component: EmailInput,
};
export default EmailInputMeta;

type EmailInputStory = ComponentStoryObj<typeof EmailInput>;

export const Basic: EmailInputStory = {};
