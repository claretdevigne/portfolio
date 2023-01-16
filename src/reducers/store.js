import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from './slice'

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
  },
})

