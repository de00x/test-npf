interface IUserInputData {
  id: number
  user: string
  username: string
  email: string
}

interface IMainControllersProps {
  userData: IUserInputData
  setUserData: React.Dispatch<React.SetStateAction<IUserInputData>>
}

export type { IUserInputData, IMainControllersProps }
