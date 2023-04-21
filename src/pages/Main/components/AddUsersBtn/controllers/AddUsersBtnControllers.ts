import { addUserFromInput, addUsers } from '../../../../../store/slices/usersSlice'
import { IAddUsersControllersProps } from '../types/AddUsersBtn.types'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const AddUsersBtnControllers = (props: IAddUsersControllersProps) => {
  const dispatch = useDispatch()

  const addUsersFromApi = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        dispatch(addUsers(res.data))
        props.setIsDownloadUsers(true)
      })
      .catch((err) => console.log('err', err))
  }

  const addUserFromForm = () => {
    const randomId = Math.round(Math.random() * 10000)
    dispatch(addUserFromInput(props.userData))
    props.setUserData({ ...props.userData, id: randomId, user: '', username: '', email: '' })
  }

  const userDataLength =
    props.userData.email.length === 0 ||
    props.userData.user.length === 0 ||
    props.userData.username.length === 0

  return { addUsersFromApi, addUserFromForm, userDataLength }
}

export default AddUsersBtnControllers
