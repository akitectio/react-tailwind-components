import type { Meta, StoryFn } from '@storybook/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Input, InputProps } from '../Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { source: { state: 'open' } }
  }
}

export default meta

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required')
})

const Template: StoryFn<InputProps> = (args: InputProps) => (
  <Formik
    initialValues={{ email: '', age: '' }}
    validationSchema={validationSchema}
    onSubmit={async (values) => {
      await new Promise((r) => setTimeout(r, 500))
      alert(JSON.stringify(values, null, 2))
    }}
  >
    <Form style={{ margin: '20px', height: '100px' }}>
      <Field as={Input} {...args} name={args.name ? args.name : 'email'} />
    </Form>
  </Formik>
)

export const Default = Template.bind({})

Default.args = {
  label: 'Email',
  placeholder: 'Enter your email'
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  disabled: true
}

Default.storyName = 'Default'
