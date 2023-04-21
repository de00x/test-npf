import { IUserInputData } from '../../../../../pages/Main/types/Main.types'

export interface IAddUsersControllersProps {
  userData: IUserInputData
  setUserData: React.Dispatch<React.SetStateAction<IUserInputData>>
  setIsDownloadUsers: React.Dispatch<React.SetStateAction<boolean>>
}
