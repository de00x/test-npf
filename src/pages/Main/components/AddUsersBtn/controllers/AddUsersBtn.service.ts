import { useEffect } from 'react'
import { IUserApiData } from '../../../../../types/userApiData.types'

const AddUsersBtnService = {
  GetCurrentUsersLength(
    users: IUserApiData[],
    setIsDownloadUsers: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    useEffect(() => {
      if (users.length === 0) {
        setIsDownloadUsers(false)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users])
  },
}

export default AddUsersBtnService
