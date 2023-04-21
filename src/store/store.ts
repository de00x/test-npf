import { configureStore } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-named-as-default
import usersReducer from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
