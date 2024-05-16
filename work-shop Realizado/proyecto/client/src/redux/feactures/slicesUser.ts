import {PayloadAction, createSlice} from '@reduxjs/toolkit'

import axios from 'axios'

//========INTERFACES==============

export interface User {
    id?: number;
    name: string;
    lastName: string;
}


export interface userState{
    users:User[];
}

const initialState:userState={
   users:[]
}

const userSlice=createSlice({
    name:"User",
    initialState,
reducers:{
    fetchUser:(state,action:PayloadAction<User[]>)=>{
     state.users=action.payload;
    }

    ,
    addUser:(state,action:PayloadAction<User>)=>{
     state.users.push(action.payload)
    }
}
});










export const  {addUser,fetchUser}=userSlice.actions;
// Selectores
//export const {name,lastName} = (state: RootState) => state.userReducer;
export default userSlice.reducer;