import React from "react";
import Index from "../src/index";

export default {
  title: "Index",
  component: Index,
};

const Template = (args) => <Index {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
