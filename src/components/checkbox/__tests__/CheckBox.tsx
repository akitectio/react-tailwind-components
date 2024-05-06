import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Formik, Form } from 'formik'
import FormikCheckbox from '../Checkbox'

describe('FormikCheckbox', () => {
  it('should toggle checkbox value', () => {
    const { getByLabelText, getByRole } = render(
      <Formik initialValues={{ agreed: false }} onSubmit={() => {}}>
        <Form>
          <FormikCheckbox name='agreed' label='I Agree' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    )

    const checkbox = getByLabelText('I Agree') as HTMLInputElement
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
  })
})
