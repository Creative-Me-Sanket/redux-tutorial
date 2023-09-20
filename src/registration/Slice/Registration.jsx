import React from "react";
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName : null,
    lastName : null,
    email : null,
}

export const registrationSlice = createSlice({
    name : 'registration',
    initialState ,

    reducers : {
        setFirstName(initialState, action) {
            initialState.firstName = action.payload
          },

        setLastName(initialState,action){
            initialState.lastName = action.payload
        },
        
        setEmail(initialState,action){
            initialState.email =action.payload
        }
    }
})

// console.log(registrationSlice.actions); 

export const {setFirstName,setLastName,setEmail} = registrationSlice.actions
export default registrationSlice.reducer