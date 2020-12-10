import { render, screen } from '@testing-library/react'

import Main from '.'

describe('MAIN', () => {
  it('mainzin', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /bulbassauro/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
