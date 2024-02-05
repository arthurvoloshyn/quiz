import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { TextInput } from "./TextInput";

const TextInputMeta: ComponentMeta<typeof TextInput> = {
  component: TextInput,
};
export default TextInputMeta;

type TextInputStory = ComponentStoryObj<typeof TextInput>;

export const Basic: TextInputStory = {};
