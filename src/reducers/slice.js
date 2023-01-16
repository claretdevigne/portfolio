import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: 'ENGLISH',
  mode: 'DARK'
}

export const counterSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    CHANGE_LENGUAGE: (state, action) => {
        state.language = action.payload
    },
    CHANGE_MODE: (state, action) => {
        state.mode = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { CHANGE_LENGUAGE, CHANGE_MODE } = counterSlice.actions

export default counterSlice.reducer