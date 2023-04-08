import { createSlice } from "@reduxjs/toolkit";


const userActionSlice = createSlice({
    name:"userAction",
    initialState:{
        likedVideos:{},
        comments:{},
        subscriptions:[]
    },
    reducers:{
        addComment : (state,action)=>{
            // console.log("action payload : ",action.payload)
        //  console.log("obj key",  Object.keys(action.payload)[0])
        //  console.log("value inside obj : ",action.payload[Object.keys(action.payload)[0]])
         if(state.comments[Object.keys(action.payload)[0]]){
            state.comments[Object.keys(action.payload)[0]] = [...action.payload[Object.keys(action.payload)[0]],...state.comments[Object.keys(action.payload)[0]]]
         }else{
            state.comments = {...state.comments, ...action.payload}
         }
        },
        addLikedVideos : (state, action)=>{
            // console.log("action.payload for addLikedVideos :  ",action.payload)
            // console.log("action.payload[Object.keys(action.payload)[0]] : ",Object.keys(action.payload)[0])
            if(state.likedVideos[Object.keys(action.payload)[0]]){
                console.log("inside")
                delete state.likedVideos[Object.keys(action.payload)[0]]
            }else{
                state.likedVideos = {...action.payload, ...state.likedVideos}
            }
            console.log(state.likedVideos)
        },
        addSubscriptions : (state, action)=>{
          const subExists =  state.subscriptions.filter((sub)=>{
            return action.payload === sub
           })
           if(subExists.length > 0){
            let index = state.subscriptions.indexOf(action.payload);
            state.subscriptions.splice(index,1)
           }else{
            state.subscriptions = [action.payload, ...state.subscriptions]
           }
        }
    }
})

export const {addComment,addLikedVideos,addSubscriptions} = userActionSlice.actions;
export default userActionSlice.reducer;


//if like button pressed, it should add in likedvideos
//everytime the videodetail component is routed, it should check if the id is given in the liked videos or not
//if yes, show liked button, if not, show  liked button without highlighted


//if the video is liked and the key already exists and then if the user likes it back, it will delete the key value pair 


//liked videos to be added : 
// {b4k545b : {object having all info}}
// make the liked videos page and get all keys in an array and loop through it