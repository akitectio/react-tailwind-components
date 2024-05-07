import { useField } from 'formik'
import React, { CSSProperties } from 'react'
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
    <div
      style={groupStyle}
      className={`flex flex-col space-y-2 ${groupClassName}`}
    >
      {label && (
        <label
          htmlFor={props.name}
          className={`block text-sm font-medium ${labelClassName}  ${
            meta.touched && meta.error ? 'text-red-500' : null
          }`}
        >
          {label}
        </label>
      )}
      <BaseInput
        {...field}
        {...props}
        placeholder={placeholder}
        inputClassName={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${inputClassName} ${
          meta.touched && meta.error ? 'border-red-500' : null
        }`}
      />
      {meta.touched && meta.error ? (
        <div className='text-red-500'>{meta.error}</div>
      ) : null}
    </div>
  )
}

export { Input, InputProps }
