import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { ProfileImage } from "./ProfileImage";

const ProfileImageMeta: ComponentMeta<typeof ProfileImage> = {
  component: ProfileImage,
};
export default ProfileImageMeta;

type ProfileImageStory = ComponentStoryObj<typeof ProfileImage>;

export const Basic: ProfileImageStory = {
  args: {},
};
