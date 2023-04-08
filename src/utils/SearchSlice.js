import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchSlice",
    initialState:{
        searchingObj : {}
    },
    reducers:{
        searchResults : (state, action)=>{
            if(Object.keys(state.searchingObj).length >= 100){
                delete Object.keys(state.searchingObj)[0]
            }
          state.searchingObj = {...state.searchingObj, ...action.payload}
        }
    }
})

export const {searchResults} = searchSlice.actions;
export default searchSlice.reducer;