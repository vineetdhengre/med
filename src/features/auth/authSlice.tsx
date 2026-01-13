import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isAuthenticated : false,
    user : null, //it will include   { id, name, email, roles: ['student'|'doctor'] }
    accessToken : null,

};

const authSlice = createSlice ({
    name : "auth",
    initialState,
    reducers : {
       setCredentials(state, action){
         const {user , accessToken } = action.payload;
           state.user = user;
           state.accessToken = accessToken;
              state.isAuthenticated = true;
       },
         logout(state){
             state.user = null;
             state.accessToken = null;
             state.isAuthenticated = false;
         },
         updateProfile(state , action){
            if(state.user){
                state.user = { ...(state.user as object), ...action.payload }
            }
         }
    }
})

export const {setCredentials, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;