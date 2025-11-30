import { screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'
import { render } from '../../test-utils/render'

describe('App', () => {
  it('renders Change theme button', () => {
    render(<App />)
    const buttonElement = screen.queryByTestId('change-theme');
    expect(buttonElement).toBeInTheDocument();
  })
})
