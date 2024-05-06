import React from 'react'
import { useField } from 'formik'

interface FormikCheckboxProps {
  name: string
  label?: string
}

const FormikCheckbox: React.FC<FormikCheckboxProps> = ({ name, label }) => {
  const [field, meta, helpers] = useField({ name, type: 'checkbox' })

  return (
    <div>
      <label>
        <input {...field} type='checkbox' />
        {label}
      </label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  )
}

export default FormikCheckbox
