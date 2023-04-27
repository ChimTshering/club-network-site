import { News } from "@/types/news_type_model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface NewsStore {
  newsList:News[] | undefined
  news:News | undefined
}
const initialState:NewsStore ={
  newsList:undefined,
  news:undefined
}
export const newsSlice = createSlice({
  name:'newsSlice',
  initialState,
  reducers:{
    setNewsInStore:(state,action:PayloadAction<News[] | undefined>)=>{
      state.newsList=action.payload
    }
  }
})
export const { setNewsInStore } = newsSlice.actions;
export default newsSlice.reducer