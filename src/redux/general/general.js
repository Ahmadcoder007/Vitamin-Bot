import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    sidebar: false,
    currentTab: "",
    credential: false,
  };


const general = createSlice({
name: 'auth',
initialState,
reducers: {
    Sidebar:(state, action) =>{
        state.sidebar = action.payload
    },
    CurrentTab:(state, action) =>{
        state.currentTab = action.payload
    },

    Credential:(state, action) =>{
        state.currentTab = action.payload
    },

},
});


export const { Sidebar, CurrentTab, Credential } = general.actions;

export default general.reducer;