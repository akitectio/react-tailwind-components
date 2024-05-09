import { useField } from 'formik'
import React, { MouseEventHandler, ReactNode } from 'react'
import { BaseInput, BaseInputProps } from './BaseInput'

interface InputGroupProps extends BaseInputProps {
  label?: string
  className?: string
  placeholder?: string
  groupClassName?: string
  labelClassName?: string
  inputClassName?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  iconClassName?: string
  onIconRightClick?: MouseEventHandler<HTMLDivElement>
  onIconLeftClick?: MouseEventHandler<HTMLDivElement>
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  inputClassName,
  placeholder,
  groupClassName,
  labelClassName,
  iconLeft,
  iconRight,
  iconClassName,
  onIconLeftClick,
  onIconRightClick,
  ...props
}) => {
  const [field, meta] = useField(props)
  return (
    <div className={`form-group w-200 ${groupClassName}`}>
      {label && (
        <label
          htmlFor={props.name}
          className={`form-label ${labelClassName}  ${
            meta.touched && meta.error ? 'text-red-500' : null
          }`}
        >
          {label}
        </label>
      )}
      <div className='max-w-sm space-y-3'>
        <div className='flex rounded-lg '>
          {iconLeft && (
            <span
              onClick={onIconRightClick}
              className={`${iconClassName} px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 cursor-pointer`}
            >
              {iconLeft}
            </span>
          )}
          <BaseInput
            {...field}
            {...props}
            placeholder={placeholder}
            className={`form-control py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm ${!iconLeft && !iconRight ? 'rounded-lg' : 'rounded-e-lg'} text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ${inputClassName} ${
              meta.touched && meta.error ? 'border-red-500' : null
            }`}
          />
          {iconRight && (
            <span
              onClick={onIconLeftClick}
              className={`${iconClassName} px-4 inline-flex items-center min-w-fit rounded-r-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 cursor-pointer`}
            >
              {iconRight}
            </span>
          )}
        </div>
      </div>
      {meta.touched && meta.error ? (
        <div className='text-red-500'>{meta.error}</div>
      ) : null}
    </div>
  )
}

export { InputGroup, InputGroupProps }
