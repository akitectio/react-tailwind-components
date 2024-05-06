import React, { CSSProperties, ReactNode, MouseEventHandler } from 'react'
import { useField } from 'formik'
import { BaseInput, BaseInputProps } from './BaseInput'
import '../../assets/scss/input/InputGroup.scss'

interface InputGroupProps extends BaseInputProps {
  label?: string
  className?: string
  placeholder?: string
  groupStyle?: CSSProperties
  labelStyle?: CSSProperties
  errorStyle?: CSSProperties
  groupClassName?: string
  labelClassName?: string
  inputClassName?: string
  icon?: ReactNode
  iconClassName?: string
  iconStyle?: CSSProperties
  onIconClick?: MouseEventHandler<HTMLDivElement> // Added this line
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  inputClassName,
  placeholder,
  groupStyle,
  labelStyle,
  groupClassName,
  labelClassName,
  icon,
  iconClassName,
  iconStyle,
  onIconClick, // Added this line
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
      <div className='input-group'>
        <BaseInput
          {...field}
          {...props}
          placeholder={placeholder}
          inputClassName={`form-control ${inputClassName} ${
            meta.touched && meta.error ? 'is-invalid' : null
          }`}
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 'none'
          }}
        />
        {icon && (
          <div
            className={`input-group-append ${iconClassName}`}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border:
                meta.touched && meta.error
                  ? '1px solid red'
                  : '1px solid #28a745',
              borderRadius: '0 0.25rem 0.25rem 0',
              padding: '0.375rem 0.75rem',
              color: meta.touched && meta.error ? 'red' : 'inherit',
              borderLeft: 'none',
              ...iconStyle
            }}
            onClick={onIconClick} // Added this line
          >
            {icon}
          </div>
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className='text-danger'>{meta.error}</div>
      ) : null}
    </div>
  )
}

export { InputGroup, InputGroupProps }
