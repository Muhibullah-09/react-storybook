import React from 'react'
import { Button } from '@chakra-ui/react';

export default {
  title: 'Chakra/Button',
  component: Button,
  decorators: [(Story) => <div><Story/></div>],
  argTypes: {
    variantColor: {control: 'text'},
    children: {control: 'text'}
    }
}

const Template =  args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
  variantColor: 'green',
  children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
  variantColor: 'red',
  children: 'Danger'
}