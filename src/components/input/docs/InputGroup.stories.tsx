import React from 'react'
import { Meta, StoryObj } from '@storybook/react' // change Story to StoryObj
import { InputGroup, InputGroupProps } from '../InputGroup'
import { FaUser } from 'react-icons/fa'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

const meta: Meta = {
  title: 'Components/InputGroup',
  tags: ['autodocs'],
  component: InputGroup,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { state: 'open' } }
  }
}
export default meta

type InputStory = StoryObj<InputGroupProps>

// Define validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required')
})

export const Default: InputStory = (args: InputGroupProps) => (
  <Formik
    initialValues={{ email: '', age: '' }}
    validationSchema={validationSchema}
    onSubmit={async (values) => {
      await new Promise((r) => setTimeout(r, 500))
      alert(JSON.stringify(values, null, 2))
    }}
  >
    <Form style={{ margin: '20px', height: '100px' }}>
      <Field as={InputGroup} {...args} name={args.name ? args.name : 'email'} />
    </Form>
  </Formik>
)

Default.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  icon: <FaUser />,
  onIconClick: () => alert('Icon clicked!') // Added this line
}

Default.storyName = 'Default'
