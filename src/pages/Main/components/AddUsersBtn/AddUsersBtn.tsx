import { AddUsersBtnControllers, AddUsersBtnService } from './controllers'
import { IInputDataProps } from '../../../../types/userInputData.types'
import styles from './styles/AddUsersBtn.module.scss'
import { RootState } from '../../../../store/store'
import { useSelector } from 'react-redux'
import { FC, useState } from 'react'

export const AddUsersBtn: FC<IInputDataProps> = ({ userData, setUserData }): JSX.Element => {
  const users = useSelector((state: RootState) => state.users)
  const [isDownloadUsers, setIsDownloadUsers] = useState(false)

  /// useEffect ///
  AddUsersBtnService.GetCurrentUsersLength(users, setIsDownloadUsers)
  /// useEffect ///

  /// controllers ///
  const { addUsersFromApi, addUserFromForm, userDataLength } = AddUsersBtnControllers({
    userData,
    setUserData,
    setIsDownloadUsers,
  })
  /// controllers ///

  return (
    <div className={styles.addUsersBtnContainer}>
      <button
        onClick={addUserFromForm}
        disabled={userDataLength}
        className={userDataLength ? styles.btnDisabled : ''}
      >
        Add from Form
      </button>
      <button
        onClick={addUsersFromApi}
        disabled={isDownloadUsers}
        className={isDownloadUsers ? styles.btnDisabled : ''}
      >
        Add from API
      </button>
    </div>
  )
}
