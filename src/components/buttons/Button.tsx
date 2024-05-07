import React from 'react'
import { BaseButton, BaseButtonProps } from './BaseButton'

interface ButtonProps extends BaseButtonProps {
  label: string
  onClick: () => void
  className?: string
  disabled?: boolean
  loading?: boolean
  children?: React.ReactNode
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <BaseButton
      {...props}
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        backgroundColor: '#3b82f6',
        color: '#fff',
        ...(props.style || {})
      }}
    >
      {props.children}
    </BaseButton>
  )
}

export { Button, ButtonProps }
