import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { H1, H2, NormalText } from "./Text";

const TextMeta: ComponentMeta<typeof NormalText> = {
  component: NormalText,
};
export default TextMeta;

const text = "The quick brown fox jumps over the lazy dog";

const NormalTextTemplate: ComponentStory<typeof NormalText> = (args) => (
  <NormalText {...args} />
);
export const NormalTextStory = NormalTextTemplate.bind({});
NormalTextStory.args = {
  children: text,
};
NormalTextStory.storyName = "NormalText";

const H1Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;
export const H1Story = H1Template.bind({});
H1Story.args = {
  children: text,
};
H1Story.storyName = "H1";

const H2Template: ComponentStory<typeof H2> = (args) => <H2 {...args} />;
export const H2Story = H2Template.bind({});
H2Story.args = {
  children: text,
};
H2Story.storyName = "H2";
