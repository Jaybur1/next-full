import { render } from '@testing-library/react'

import { Example } from '@components/Example'

describe('Example component', () => {
  it('should render the example component without breaking', () => {
    const result = render(<Example />)

    expect(result.findByText('Hello')).toBeInTheDocument
  })
})
