import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { CoolComponent } from "./CoolComponent";

const CoolComponentMeta: ComponentMeta<typeof CoolComponent> = {
  component: CoolComponent,
};
export default CoolComponentMeta;

type CoolComponentStory = ComponentStory<typeof CoolComponent>;

export const Basic: CoolComponentStory = (args) => <CoolComponent {...args} />;

Basic.args = {
  text: "Hello World",
};
