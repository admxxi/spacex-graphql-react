import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button, { ButtonType } from './Button'

it('renders correctly', () => {
  const fn = jest.fn()
  const { container } = render(
    <Button text="Load more" disabled={false} onClick={fn} />
  )
  expect(container.firstChild).toMatchSnapshot()
})

it('should execute the click function', () => {
  const fn = jest.fn()
  render(
    <Button
      text="See more"
      type={ButtonType.primary}
      disabled={false}
      onclick={fn}
    />
  )

  const button = screen.getByRole('button', { name: /See more/i })
  userEvent.click(button)
  expect(fn).toHaveBeenCalledTimes(1)
})
