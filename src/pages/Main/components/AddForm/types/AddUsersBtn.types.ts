import { IUserInputData } from '../../../types/Main.types'

export interface IAddFormProps {
  userData: IUserInputData
  setUserData: React.Dispatch<React.SetStateAction<IUserInputData>>
  setIsDownloadUsers: React.Dispatch<React.SetStateAction<boolean>>
}
