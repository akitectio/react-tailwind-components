import React from 'react'
import { useFormik } from 'formik'

interface ButtonProps {
  label: string
  onClick: () => void
  style?: React.CSSProperties
  disabled?: boolean
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
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

export default Button
