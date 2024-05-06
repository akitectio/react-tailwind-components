// Input.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Input } from '../Input'

describe('Input', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <Input name='test' placeholder='Enter text' />
    )

    expect(getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('handles input value change', () => {
    const { getByPlaceholderText } = render(
      <Input name='test' placeholder='Enter text' />
    )

    const input = getByPlaceholderText('Enter text') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'test value' } })

    expect(input.value).toBe('test value')
  })

  it('renders label if provided', () => {
    const { getByText } = render(<Input name='test' label='Test Label' />)

    expect(getByText('Test Label')).toBeInTheDocument()
  })
})
