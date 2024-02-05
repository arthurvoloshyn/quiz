import { getAsset } from "@app/core/assets/getAsset";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { ImageButton } from "./ImageButton";

const ImageButtonMeta: ComponentMeta<typeof ImageButton> = {
  component: ImageButton,
};
export default ImageButtonMeta;

type ImageButtonStory = ComponentStory<typeof ImageButton>;

export const Basic: ImageButtonStory = (args) => (
  <ImageButton
    {...args}
    className="p-2 bg-green-300 self-center"
    // eslint-disable-next-line react-native/no-inline-styles
    imageStyle={{ tintColor: "orange" }}
    source={getAsset("user")}
    onPress={action("onPress")}
  />
);
