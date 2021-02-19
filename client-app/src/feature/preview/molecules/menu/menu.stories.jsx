import React from "react";

import {Menu} from "./menu";
import Fonts from "../../../../attachments/font/fonts";

export default {
  title: 'Menu',
  component: Menu,
}

const Template = (args) => (
  <>
    <Fonts />
    <Menu {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {

}