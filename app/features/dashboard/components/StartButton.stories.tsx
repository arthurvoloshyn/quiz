import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { StartButton } from "./StartButton";
import { action } from "@storybook/addon-actions";

const StartButtonMeta: ComponentMeta<typeof StartButton> = {
  component: StartButton,
};
export default StartButtonMeta;

type StartButtonStory = ComponentStoryObj<typeof StartButton>;

export const Basic: StartButtonStory = {
  args: {
    title: "Start",
    onPress: action("onPress"),
  },
};
