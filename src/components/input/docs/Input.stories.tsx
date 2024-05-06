import React from 'react'
import { Formik, Form, Field } from 'formik'
import type { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from '../Input'
import * as Yup from 'yup'

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

type InputStory = StoryObj<InputProps>

// Define validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required')
})

export const Default: InputStory = (args: InputProps) => (
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

Default.args = {
  label: 'Email',
  placeholder: 'Enter your email'
}

Default.storyName = 'Default'
