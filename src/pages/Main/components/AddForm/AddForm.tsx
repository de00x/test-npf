import { IInputDataProps } from '../../../../types/userInputData.types'
import { MainControllers } from '../../controllers'
import styles from './styles/AddForm.module.scss'
import { FC } from 'react'

export const AddForm: FC<IInputDataProps> = ({ userData, setUserData }): JSX.Element => {
  const { changeName, changeUsername, changeEmail } = MainControllers({ userData, setUserData })

  return (
    <form className={styles.addForm}>
      <input
        type="text"
        maxLength={15}
        placeholder="user"
        value={userData.user}
        onChange={(e) => changeName(e)}
      />
      <input
        type="text"
        maxLength={15}
        placeholder="username"
        value={userData.username}
        onChange={(e) => changeUsername(e)}
      />
      <input
        type="email"
        maxLength={15}
        placeholder="email"
        value={userData.email}
        onChange={(e) => changeEmail(e)}
      />
    </form>
  )
}
