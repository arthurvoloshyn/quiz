import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { ScreenContainer } from "./ScreenContainer";

const StoryComponentMeta: ComponentMeta<typeof ScreenContainer> = {
  component: ScreenContainer,
};
export default StoryComponentMeta;

type StoryComponentStory = ComponentStory<typeof ScreenContainer>;

export const Basic: StoryComponentStory = (args) => (
  <ScreenContainer {...args} />
);
