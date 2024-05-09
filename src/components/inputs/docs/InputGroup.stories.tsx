import { Meta, StoryObj } from '@storybook/react';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { FaAccusoft, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import * as Yup from 'yup';
import { InputGroup, InputGroupProps } from '../InputGroup';

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

// Story for InputGroup with icon at the start
export const IconStart: InputStory = (args: InputGroupProps) => (
  <Formik
    initialValues={{ email: '' }}
    validationSchema={validationSchema}
    onSubmit={values => console.log(values)}
  >
    <Form>
      <Field
        as={InputGroup}
        name="email"
        placeholder="Email"
        iconLeft={<FaEnvelope />}
        {...args}
      />
    </Form>
  </Formik>
)
IconStart.storyName = 'With Icon at Start'

// Story for InputGroup with icon at the end
export const IconEnd: InputStory = (args: InputGroupProps) => (
  <Formik
    initialValues={{ email: '' }}
    validationSchema={validationSchema}
    onSubmit={values => console.log(values)}
  >
    <Form>
      <Field
        as={InputGroup}
        name="email"
        placeholder="Email"
        iconRight={<FaAccusoft />}
        {...args}
      />
    </Form>
  </Formik>
)
IconEnd.storyName = 'With Icon at End'

// Story for InputGroup with password toggle
export const PasswordToggle: InputStory = (args: InputGroupProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{ password: '' }}
      validationSchema={Yup.object({
        password: Yup.string().required('Required')
      })}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <Field
          as={InputGroup}
          name="password"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          iconRight={showPassword ? <FaEyeSlash onClick={() => setShowPassword(false)} /> : <FaEye onClick={() => setShowPassword(true)} />}
          {...args}
        />
      </Form>
    </Formik>
  )
}
PasswordToggle.storyName = 'With Password Toggle'