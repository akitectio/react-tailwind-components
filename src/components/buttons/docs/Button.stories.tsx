import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { Button, ButtonProps } from '../Button'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <div className='p-5'>
    <Button {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
  onClick: () => {
    alert('Button clicked!')
  }
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Button',
  onClick: () => {
    alert('Button clicked!')
  },
  disabled: true
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Button',
  onClick: () => {
    alert('Button clicked!')
  },
  loading: true,
  loadingColor: '#333',
  loadingsize: 18,
  loadingText: 'Loading...'
}