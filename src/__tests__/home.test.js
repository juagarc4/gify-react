import { render, fireEvent, screen } from '@testing-library/react'
import App from '../App'

test('Search form can be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  fireEvent.change(input, { target: { value: 'Matrix' } })
  const button = await screen.findByRole('button')
  fireEvent.click(button)
  const title = await screen.findByText('Matrix')
  expect(title).toBeInTheDocument()
})
