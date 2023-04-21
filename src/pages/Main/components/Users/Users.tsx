import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteUser } from '../../../../store/slices/usersSlice'
import { RootState } from '../../../../store/store'
import styles from './styles/Users.module.scss'

export const Users: FC = (): JSX.Element => {
  const users = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch()

  return (
    <div className={styles.wrapper}>
      {users.map((user) => (
        <div
          className={styles.userContainer}
          onClick={() => dispatch(deleteUser(user.id))}
          key={user.id}
        >
          <div>
            name: <span>{user.name}</span>
          </div>
          <div>
            username: <span>{user.username}</span>
          </div>
          <div>
            email: <span>{user.email}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
