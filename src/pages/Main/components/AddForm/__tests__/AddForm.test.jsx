import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../../../../store/store'
import { AddForm } from '../AddForm'

jest.mock('axios', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  }
})

// eslint-disable-next-line react/prop-types
const ReduxWrapper = ({ children }) => <Provider store={store}>{children}</Provider>

describe('AddForm component', () => {
  it('AddForm renders', () => {
    render(<AddForm />, { wrapper: ReduxWrapper })
  })

  it('AddForm text renders', () => {
    render(<AddForm />, { wrapper: ReduxWrapper })

    expect(screen.getByText('Add from API')).toBeInTheDocument()
  })

  it('AddForm renders without', () => {
    render(<AddForm />, { wrapper: ReduxWrapper })

    expect(screen.queryByRole('list')).toBeNull()
  })

  it('AddForm snapshot', () => {
    const addForm = render(<AddForm />, { wrapper: ReduxWrapper })

    expect(addForm).toMatchSnapshot()
  })
})
