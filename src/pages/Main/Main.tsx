import { AddForm, AddUsersBtn, Users } from './components'
import { IUserInputData } from './types/Main.types'
import styles from './styles/Main.module.scss'
import { FC, useState } from 'react'

export const Main: FC = (): JSX.Element => {
  const [userData, setUserData] = useState<IUserInputData>({
    id: Math.round(Math.random() * 10000),
    user: '',
    username: '',
    email: '',
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.addFormContainer}>
        <AddUsersBtn userData={userData} setUserData={setUserData} />
        <AddForm userData={userData} setUserData={setUserData} />
        <Users />
      </div>
    </div>
  )
}
