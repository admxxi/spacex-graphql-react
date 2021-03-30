import React from 'react'
import styled, { withTheme } from 'styled-components'

export enum ButtonType {
  info = 'info',
  primary = 'primary',
  success = 'success',
  warning = 'warning'
}

interface ButtonProps {
  type: ButtonType
  text: string
  onclick(): void
  disabled: boolean
  size: number
  icon: string
}

const Button = styled(
  ({
    type = ButtonType.primary,
    size = 2,
    text = 'Button',
    icon,
    onclick,
    disabled
  }: ButtonProps) => {
    return (
      <button
        type="button"
        className={`button is-large is-link is-light is-${type} is-${size}`}
        disabled={disabled}
        onClick={onclick}
      >
        {icon && (
          <span className="icon">
            <i className={`fa fa-${icon}`}></i>
          </span>
        )}
        <span>{text}</span>
      </button>
    )
  }
)``

export default Button
