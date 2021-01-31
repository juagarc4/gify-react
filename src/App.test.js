import { render, screen } from '@testing-library/react'
import App from './App'

test('Loads asyncronous front page properly', async () => {
  const { findByText } = render(<App />)
  const title = await findByText(/Last search/i)
  expect(title).toBeInTheDocument()
})
