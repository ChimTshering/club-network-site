import {FeedObj} from "./../../types/feeds_type_model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:any={
  feed:undefined
}

export const feedSlice = createSlice({
  name:'feedSlice',
  initialState,
  reducers:{
    feedStore:(state,action:PayloadAction<FeedObj | undefined>)=>{
      if(!action?.payload){
        state.feed=undefined
      }else{
        state.feed =action.payload
      }
    }
  }
})
export const {feedStore} = feedSlice.actions
export default feedSlice.reducer