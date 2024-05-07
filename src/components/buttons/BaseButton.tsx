import { useFormik } from 'formik'
import React from 'react'

interface BaseButtonProps {
  label: string
  onClick: () => void
  style?: React.CSSProperties
  disabled?: boolean
  loading?: boolean
}

const BaseButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  style,
  disabled,
  loading
}) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: onClick
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <button type='submit' style={style} disabled={disabled || loading}>
        {loading ? 'Loading...' : label}
      </button>
    </form>
  )
}

export { BaseButton, BaseButtonProps }
