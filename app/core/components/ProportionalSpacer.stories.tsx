import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Text } from "react-native";
import { ProportionalSpacer } from "./ProportionalSpacer";

const ProportionalSpacerMeta: ComponentMeta<typeof ProportionalSpacer> = {
  component: ProportionalSpacer,
};
export default ProportionalSpacerMeta;

type ProportionalSpacerStory = ComponentStory<typeof ProportionalSpacer>;

const ProportionalSpacerTemplate: ProportionalSpacerStory = (args) => (
  <ProportionalSpacer className="bg-blue-400" {...args}>
    <Text className="bg-red-400">Children</Text>
  </ProportionalSpacer>
);

export const Ratio50 = ProportionalSpacerTemplate.bind({});
Ratio50.args = {
  ratioOfFreeSpaceAtTop: 0.5,
};
Ratio50.storyName = "Ratio 50%";

export const Ratio100 = ProportionalSpacerTemplate.bind({});
Ratio100.args = {
  ratioOfFreeSpaceAtTop: 1,
};
Ratio100.storyName = "Ratio 100%";
