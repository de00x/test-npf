import { IMainControllersProps } from '../types/Main.types'

const MainControllers = (props: IMainControllersProps) => {
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUserData({ ...props.userData, user: e.target.value })
  }
  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUserData({ ...props.userData, username: e.target.value })
  }
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUserData({ ...props.userData, email: e.target.value })
  }

  return { changeName, changeUsername, changeEmail }
}

export default MainControllers
