import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import feedReducer from './features/feedSlice'
import {useDispatch as useDispatchMain } from 'react-redux'

export const store = configureStore({
  reducer:{
    auth:authReducer,
    feed:feedReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const UseDispatch =()=> useDispatchMain<AppDispatch>();