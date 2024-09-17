import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from '@mui/material'
import React from 'react'

// Define types for button properties
export type ButtonColor = 'primary' | 'gradient'
export type ButtonSize = 'md' | 'lg' | 'sm' | undefined
export type ButtonAppearance = 'solid' | 'light-solid' | 'outline' | 'light-outline' | 'ghost' | 'hyperlink'
export type ButtonType = 'normal' | 'on-table'

type CustomButtonProps = {
  children?: React.ReactNode
  isLoading?: boolean
  form?: string
  fullWidth?: boolean
  buttonSize?: ButtonSize
  appearance?: ButtonAppearance
  buttonColor?: ButtonColor
  buttonType?: ButtonType
} & MaterialButtonProps

const Button = ({
  children,
  isLoading = false,
  className = '',
  appearance = 'solid',
  buttonColor = 'primary',
  buttonSize = 'lg',
  fullWidth = false,
  buttonType = 'normal',
  sx = {},
  ...remainingProps
}: CustomButtonProps) => {
  // Custom styling for the button
  const customStyling = {
    width: fullWidth ? '100%' : 'fit-content',
    ...sx
  }

  return <MaterialButton>{children}</MaterialButton>
}

export default Button
