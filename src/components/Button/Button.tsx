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
  size?: number
  icon: string
}

const Button = ({
  type = ButtonType.primary,
  size = 2,
  text = 'Button',
  icon,
  onclick,
  disabled
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`button is-large is-link is-light is-${type} is-${size}`}
      disabled={disabled}
      onClick={onclick}
    >
      {typeof icon === 'string' && (
        <span className="icon">
          <i className={`fa fa-${icon}`}></i>
        </span>
      )}
      <span>{text}</span>
    </button>
  )
}

export default Button
