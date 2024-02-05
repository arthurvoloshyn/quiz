import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { PrimaryButton } from "./PrimaryButton";
import { View } from "react-native";

const PrimaryButtonMeta: ComponentMeta<typeof PrimaryButton> = {
  component: PrimaryButton,
  decorators: [
    (Story) => (
      <View className="p-2">
        <Story />
      </View>
    ),
  ],
};
export default PrimaryButtonMeta;

type PrimaryButtonStory = ComponentStoryObj<typeof PrimaryButton>;

export const Basic: PrimaryButtonStory = {
  args: {
    title: "Primary Button",
    isInProgress: false,
  },
};

export const InProgress: PrimaryButtonStory = {
  args: {
    title: "Primary Button",
    isInProgress: true,
  },
};
