import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../../store/store'
import { Main } from '../Main'

jest.mock('axios', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  }
})

// eslint-disable-next-line react/prop-types
const ReduxWrapper = ({ children }) => <Provider store={store}>{children}</Provider>

describe('Main component', () => {
  it('Main renders', () => {
    render(<Main />, { wrapper: ReduxWrapper })

    expect(screen.getByText('Add from API')).toBeInTheDocument()
  })
})
