import React from 'react'
import { Spinner } from './index'
import { render } from '@testing-library/react'

it('renders correctly', () => {
  const { container } = render(<Spinner />)
  expect(container.firstChild).toMatchSnapshot()
})
