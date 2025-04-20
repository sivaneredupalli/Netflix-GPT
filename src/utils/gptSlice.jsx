import { createSlice } from "@reduxjs/toolkit";

 const gptSlice = createSlice(
    {
        name :'gptSearch',
        initialState : {
            showGPTSearch : false,
            gptSearchMovies : null,
            tmdbSearchMovies : null,
          
        },
        reducers : {
        toggleGPTSearchView(state){
            state.showGPTSearch = !state.showGPTSearch    
        },
        suggestedMovieResults(state,action){
           const {gptSearchMovies,tmdbSearchMovies} = action.payload
            state.gptSearchMovies = gptSearchMovies
            state.tmdbSearchMovies = tmdbSearchMovies
            
        },
        clearGptAndTmdbSearchResults(state){
            state.gptSearchMovies=null,
            state.tmdbSearchMovies=null
        }
    }
    }
 )
 export const {toggleGPTSearchView,suggestedMovieResults,clearGptAndTmdbSearchResults}= gptSlice.actions;
export  default  gptSlice.reducer;