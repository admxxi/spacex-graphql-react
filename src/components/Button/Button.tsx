import React from 'react'
import styled, { withTheme } from 'styled-components'

enum ButtonType {
  primary = 'primary',
  success = 'success',
  warning = 'warning'
}

interface ButtonProps {
  type: ButtonType
  text: string
  onclick(): void
}

const Button = styled(
  ({ type = ButtonType.primary, text = 'Button', onclick }: ButtonProps) => {
    return (
      <a className={`button is-${type}`} onClick={onclick}>
        {text}
      </a>
    )
  }
)``

export default withTheme(Button)
