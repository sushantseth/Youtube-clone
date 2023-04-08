import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import toggleSlice from "./toggleSlice";
import UserActionSlice from "./UserActionSlice";


const store = configureStore({
    reducer :{
        toggle : toggleSlice,
        search : SearchSlice,
        userAction : UserActionSlice
    }
})

export default store;