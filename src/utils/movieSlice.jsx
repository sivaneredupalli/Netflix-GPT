import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name :'movie',
        initialState:{
            addMovies : null,
            addPopularMovies : null,
            addUpcomingMovies : null,
            addTopRatedMovies : null,
            addTrailerVideo : null
        },
        reducers : {
            addMovies(state,action){
                state.addMovies = action.payload;
            },
            addPopularMovies(state,action){
                state.addPopularMovies = action.payload;
            },
            addUpcomingMovies(state,action){
                state.addUpcomingMovies = action.payload;
            },
            addTopRatedMovies(state,action){
                state.addTopRatedMovies = action.payload;
            },
            addTrailerVideo(state,action){
                state.addTrailerVideo = action.payload;
            }
        }
    }
)
export const {addMovies,addPopularMovies,addTrailerVideo,addUpcomingMovies,addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;