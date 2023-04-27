import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import feedReducer from './features/feedSlice'
import newsReducer from './features/newsSlice'
import {useDispatch as useDispatchMain } from 'react-redux'

export const store = configureStore({
  reducer:{
    auth:authReducer,
    feed:feedReducer,
    news:newsReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const UseDispatch =()=> useDispatchMain<AppDispatch>();