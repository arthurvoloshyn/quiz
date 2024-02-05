import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { HeaderButton } from "./HeaderButton";
import { action } from "@storybook/addon-actions";
import { getAsset } from "@app/core/assets/getAsset";

const StoryComponentMeta: ComponentMeta<typeof HeaderButton> = {
  component: HeaderButton,
};
export default StoryComponentMeta;

type StoryComponentStory = ComponentStory<typeof HeaderButton>;

export const Basic: StoryComponentStory = () => (
  <HeaderButton
    onPress={action("onPress")}
    source={getAsset("user")}
    className="bg-gray-300 self-center"
  />
);
Basic.storyName = "HeaderButton";
