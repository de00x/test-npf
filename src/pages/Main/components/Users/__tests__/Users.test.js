import { render } from '@testing-library/react'
import { useSelector } from 'react-redux'

import { Users } from '../Users'

jest.mock('react-redux')

const usersArray = [
  { id: 123, name: 'name', username: 'username', email: 'email' },
  { id: 321, name: 'namee', username: 'usernamee', email: 'emaile' },
]

describe('usersList', () => {
  it('should create usersList with empty users', () => {
    useSelector.mockReturnValue([])

    const component = render(<Users />)

    expect(component).toMatchSnapshot()
  })

  it('should create usersList with users', () => {
    useSelector.mockReturnValue(usersArray)

    const component = render(<Users />)

    expect(component).toMatchSnapshot()
  })

  it('should create Users', () => {
    useSelector.mockReturnValue(usersArray)
    const component = render(<Users />)

    expect(component).toMatchSnapshot()
  })
})
