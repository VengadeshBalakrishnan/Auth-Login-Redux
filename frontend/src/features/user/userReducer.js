import { createSlice } from '@reduxjs/toolkit'
import { getUserDetails, userRegisteration, userLogin } from './userActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken') // delete token from storage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // register user
    [userRegisteration.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userRegisteration.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    },
    [userRegisteration.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // get user details
    [getUserDetails.pending]: (state) => {
      state.loading = true
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false
    },
  },
})

export const { logout } = userReducer.actions

export default userReducer.reducer
