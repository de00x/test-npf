import axios from 'axios'
import { useDispatch } from 'react-redux'

import { addUserFromInput, addUsers } from '../../../../../store/slices/usersSlice'
import { IAddFormProps } from '../types/AddUsersBtn.types'

const AddFormControllers = (props: IAddFormProps) => {
  const dispatch = useDispatch()

  const userDataLength =
    props.userData.email.length === 0 ||
    props.userData.name.length === 0 ||
    props.userData.username.length === 0

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
    if (!userDataLength) {
      const randomId = Math.round(Math.random() * 10000)
      dispatch(addUserFromInput(props.userData))
      props.setUserData({ ...props.userData, id: randomId, name: '', username: '', email: '' })
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addUserFromForm()
  }

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUserData({ ...props.userData, name: e.target.value })
  }
  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUserData({ ...props.userData, username: e.target.value })
  }
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUserData({ ...props.userData, email: e.target.value })
  }

  return {
    onSubmit,
    changeName,
    changeEmail,
    changeUsername,
    userDataLength,
    addUsersFromApi,
    addUserFromForm,
  }
}

export default AddFormControllers
