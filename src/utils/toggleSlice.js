import { createSlice } from "@reduxjs/toolkit";


const toggleSlice = createSlice({
    name:"toggle",
    initialState : {
        isMenuOpen:true
    },
    reducers:{
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        setMenuFalse : (state) => {
            state.isMenuOpen = false
        },
        setMenuTrue : (state) => {
            state.isMenuOpen = true
        }
    }
})

export const {toggleMenu, setMenuFalse, setMenuTrue} = toggleSlice.actions;

export default toggleSlice.reducer;