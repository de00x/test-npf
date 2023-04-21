import { IUserInputData } from '../pages/Main/types/Main.types'

export interface IInputDataProps {
  userData: IUserInputData
  setUserData: React.Dispatch<React.SetStateAction<IUserInputData>>
}
