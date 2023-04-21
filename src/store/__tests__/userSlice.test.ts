import usersReducer, { addUserFromInput, addUsers, deleteUser } from '../slices/usersSlice'

describe('userSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = usersReducer(undefined, { type: '' })

    expect(result).toEqual([])
  })

  it('should add new user with "addUsers" action', () => {
    const arrayUsers = [{ id: 123, name: 'name', username: 'username', email: 'email' }]
    const action = { type: addUsers.type, payload: arrayUsers }

    const result = usersReducer([], action)

    expect(result[0].id).toBe(123)
    expect(result[0].name).toBe('name')
    expect(result[0].username).toBe('username')
    expect(result[0].email).toBe('email')
  })

  it('should add new user with "addUserFromInput" action', () => {
    const arrayUsers = { id: 123, name: 'name', username: 'username', email: 'email' }
    const action = { type: addUserFromInput.type, payload: arrayUsers }

    const result = usersReducer([], action)

    expect(result[0].id).toBe(123)
    expect(result[0].name).toBe('name')
    expect(result[0].username).toBe('username')
    expect(result[0].email).toBe('email')
  })

  it('should remove user by id with "deleteUser" action', () => {
    const arrayUsers = [{ id: 123, name: 'name', username: 'username', email: 'email' }]
    const action = { type: deleteUser.type, payload: 123 }

    const result = usersReducer(arrayUsers, action)

    expect(result).toEqual([])
  })
})
