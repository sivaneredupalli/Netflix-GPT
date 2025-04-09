import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name :'movie',
        initialState:{
            addMovies : null,
            addTrailerVideo : null
        },
        reducers : {
            addMovies(state,action){
                state.addMovies = action.payload;
            },
            addTrailerVideo(state,action){
                state.addTrailerVideo = action.payload;
            }
        }
    }
)
export const {addMovies,addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;