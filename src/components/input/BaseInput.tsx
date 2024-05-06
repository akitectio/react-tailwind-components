import React, { CSSProperties } from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  inputStyle?: CSSProperties
  readOnly?: boolean
  disabled?: boolean
  inputClassName?: string
}

const BaseInput: React.FC<BaseInputProps> = ({
  name,
  inputStyle,
  readOnly,
  disabled,
  inputClassName,
  ...props
}) => {
  const [field] = useField(name)

  return (
    <input
      {...field}
      type='text'
      style={inputStyle}
      readOnly={readOnly}
      disabled={disabled}
      {...props}
      className={inputClassName}
    />
  )
}

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  inputStyle: PropTypes.object,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

export { BaseInput, BaseInputProps }
