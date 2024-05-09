import { useFormik } from 'formik';
import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";


interface BaseButtonProps {
  label: string
  onClick: () => void
  style?: React.CSSProperties
  disabled?: boolean
  loading?: boolean
  loadingColor?: string
  loadingsize?: number
  loadingText?: string
  children?: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  label,
  onClick,
  style,
  disabled,
  loading,
  loadingColor = '#ffffff',
  loadingsize = 18,
  loadingText = ''
}) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: onClick
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <button type='submit' style={style} disabled={disabled || loading}>
      {loading ?
       <><ClipLoader color={loadingColor} loading={loading} size={loadingsize} /> <span>{loadingText}</span></>
       : label
      }
      </button>
    </form>
  )
}

export { BaseButton, BaseButtonProps };

