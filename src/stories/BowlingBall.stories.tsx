// change1
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BowlingBall } from "../BowlingBall";

export default {
  title: "Example/BowlingBall",
  component: BowlingBall,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BowlingBall>;

const Template: ComponentStory<typeof BowlingBall> = (args) => (
  <BowlingBall {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  index: 0,
};

export const Secondary = Template.bind({});
Secondary.args = {
  index: 0,
};

export const Third = Template.bind({});
Third.args = {
  index: 0,
};

export const Fourth = Template.bind({});
Fourth.args = {
  index: 0,
};