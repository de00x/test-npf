import { FC } from 'react'

import { AddForm, Users } from './components'
import styles from './styles/Main.module.scss'

export const Main: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.addFormContainer}>
        <AddForm />
        <Users />
      </div>
    </div>
  )
}
