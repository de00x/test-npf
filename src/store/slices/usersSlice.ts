import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { IUserApiData } from '../../types/userApiData.types'

const initialState: IUserApiData[] = []

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<IUserApiData[]>) => {
      state.push(...action.payload)
    },
    addUserFromInput: (state, action: PayloadAction<IUserApiData>) => {
      state.unshift(action.payload)
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      return state.filter((user) => user.id !== action.payload)
    },
  },
})

export const { addUsers, addUserFromInput, deleteUser } = usersSlice.actions
export default usersSlice.reducer
