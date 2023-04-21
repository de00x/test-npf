import cn from 'classnames'
import { FC, useState } from 'react'
import { useSelector } from 'react-redux'

import { IUserInputData } from '../../../../pages/Main/types/Main.types'
import { RootState } from '../../../../store/store'
import { AddFormControllers, AddFormService } from './controllers'
import styles from './styles/AddForm.module.scss'

export const AddForm: FC = (): JSX.Element => {
  const users = useSelector((state: RootState) => state.users)
  const [isDownloadUsers, setIsDownloadUsers] = useState(false)
  const [userData, setUserData] = useState<IUserInputData>({
    id: Math.round(Math.random() * 10000),
    name: '',
    username: '',
    email: '',
  })

  /// useEffect ///
  AddFormService.GetCurrentUsersLength(users, setIsDownloadUsers)
  /// useEffect ///

  /// controllers ///
  const { onSubmit, changeName, changeEmail, userDataLength, changeUsername, addUsersFromApi } =
    AddFormControllers({
      userData,
      setUserData,
      setIsDownloadUsers,
    })
  /// controllers ///

  return (
    <>
      <form className={styles.addForm} onSubmit={(e) => onSubmit(e)}>
        <div className={styles.inputContainer}>
          <input
            required
            type="text"
            placeholder="name"
            value={userData.name}
            onChange={(e) => changeName(e)}
          />
          <input
            required
            type="text"
            placeholder="username"
            value={userData.username}
            onChange={(e) => changeUsername(e)}
          />
          <input
            required
            type="email"
            placeholder="email"
            value={userData.email}
            onChange={(e) => changeEmail(e)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </div>
        <div className={styles.btnAddFromFormContainer}>
          <button type="submit" className={cn({ [styles.btnDisabled]: userDataLength })}>
            Add from Form
          </button>
        </div>
      </form>
      <div className={styles.btnAddFromApiContainer}>
        <button onClick={addUsersFromApi} className={cn({ [styles.btnDisabled]: isDownloadUsers })}>
          Add from API
        </button>
      </div>
    </>
  )
}
