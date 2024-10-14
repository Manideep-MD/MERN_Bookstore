import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   userData:[]
}

export const userDetails = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    SET_USER_DATA: (state,action) => {
       state.userData = action.payload
    },
  },
})

export const { SET_USER_DATA } = userDetails.actions

export default userDetails.reducer