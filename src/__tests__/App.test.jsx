import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from '../App'
import { store } from '../store/store'

jest.mock('axios', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  }
})

// eslint-disable-next-line react/prop-types
const ReduxWrapper = ({ children }) => <Provider store={store}>{children}</Provider>

it('App renders', () => {
  render(<App />, { wrapper: ReduxWrapper })
})
