import React, { CSSProperties } from 'react'
import { useField } from 'formik'
import { BaseInput, BaseInputProps } from './BaseInput'

interface InputProps extends BaseInputProps {
  label?: string
  className?: string
  placeholder?: string
  groupStyle?: CSSProperties
  labelStyle?: CSSProperties
  errorStyle?: CSSProperties
  groupClassName?: string
  labelClassName?: string
  inputClassName?: string
}

const Input: React.FC<InputProps> = ({
  label,
  inputClassName,
  placeholder,
  groupStyle,
  labelStyle,
  groupClassName,
  labelClassName,
  ...props
}) => {
  const [field, meta] = useField(props)
  return (
    <div style={groupStyle} className={`form-group ${groupClassName}`}>
      {label && (
        <label
          htmlFor={props.name}
          className={`form-label ${labelClassName}  ${
            meta.touched && meta.error ? 'text-danger' : null
          }`}
        >
          {label}
        </label>
      )}
      <BaseInput
        {...field}
        {...props}
        placeholder={placeholder}
        inputClassName={`form-control ${inputClassName} ${
          meta.touched && meta.error ? 'is-invalid' : null
        }`}
      />
      {meta.touched && meta.error ? (
        <div className='text-danger'>{meta.error}</div>
      ) : null}
    </div>
  )
}

export { Input, InputProps }
