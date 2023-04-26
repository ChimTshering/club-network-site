import {FeedObj} from "./../../types/feeds_type_model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:any={
  feed:undefined,
  groupIds:undefined
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
    },
    setPostGroupIds:(state,action:PayloadAction<string[] | undefined>)=>{
      if(!action.payload){
        state.groupIds=undefined
      }else{
        state.groupIds=action.payload
      }
    }
  }
})
export const {feedStore,setPostGroupIds} = feedSlice.actions
export default feedSlice.reducer