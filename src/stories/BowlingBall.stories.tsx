import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BowlingBall } from "../BowlingBall";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/BowlingBall",
  component: BowlingBall,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BowlingBall>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BowlingBall> = (args) => (
  <BowlingBall {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  index: 0,
  // primary: true,
  // label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  index: 0,
};
