import { render, screen } from '@testing-library/react'

import Main from '.'

describe('MAIN', () => {
  it('Should render heading to Main', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /rweact Avançado/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
