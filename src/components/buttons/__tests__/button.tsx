import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../Button'

describe('Button', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Button label='Button' onClick={() => {}} />)
    expect(getByText('Button')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button label='Button' onClick={handleClick} />
    )
    fireEvent.click(getByText('Button'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('displays loading text when loading', () => {
    const { getByText } = render(
      <Button label='Button' onClick={() => {}} loading />
    )
    expect(getByText('Loading...')).toBeInTheDocument()
  })
})
