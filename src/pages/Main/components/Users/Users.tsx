import { FC } from 'react'
import styles from './styles/Users.module.scss'
import { RootState } from '../../../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../../../store/slices/usersSlice'

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
            user: <span>{user.user}</span>
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
