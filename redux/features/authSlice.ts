import {authStore, signInResponse} from "./../../types/auth_type_model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
const initialState:authStore={
  signed_in_user:undefined
}
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    SetUser:(state,action:PayloadAction<signInResponse>)=>{
      state.signed_in_user = action.payload
    }
  },
});
export const {SetUser} = authSlice.actions
export default authSlice.reducer