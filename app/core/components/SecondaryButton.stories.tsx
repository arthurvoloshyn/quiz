import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { SecondaryButton } from "./SecondaryButton";
import { View } from "react-native";

const SecondaryButtonMeta: ComponentMeta<typeof SecondaryButton> = {
  component: SecondaryButton,
  decorators: [
    (Story) => (
      <View className="p-2">
        <Story />
      </View>
    ),
  ],
};
export default SecondaryButtonMeta;

type SecondaryButtonStory = ComponentStoryObj<typeof SecondaryButton>;

export const Basic: SecondaryButtonStory = {
  args: {
    title: "Secondary Button",
    isInProgress: false,
  },
};

export const InProgress: SecondaryButtonStory = {
  args: {
    title: "Secondary Button",
    isInProgress: true,
  },
};
