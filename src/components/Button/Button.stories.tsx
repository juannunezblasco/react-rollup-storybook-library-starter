import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Button, { ButtonProps } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const ExportDefault: Meta<typeof Button> = {
  title: "ReactComponentLibrary/Button",
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld: StoryFn<ButtonProps> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Save",
};

export const ClickMe: StoryFn<ButtonProps> = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};

export default ExportDefault;
