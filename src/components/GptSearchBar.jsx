import React, { useRef } from 'react'
import lang from '../utils/configConstant';
import { useDispatch, useSelector } from 'react-redux';
import geminiai from '../utils/geminiai';
import { API_Options } from '../utils/Constants';
import { suggestedMovieResults } from '../utils/gptSlice';


const GptSearchBar = () => {
  const language = useSelector(store => store.config.language)
  const dispatch = useDispatch()
  const SearchResult = useRef(null);
  //Search Movies in TMDB
  const searchedMoviesTmdb = async (movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_Options);
    const json = await data.json();
    return json;
  }
  const handleGptSearchClick = async () =>{
    console.log(SearchResult.current.value)
    const Search_Query = "Act as a movie recommended system and suggest some movies for the query"+SearchResult.current.value+". Only give me names of 5 movies, comma seperated like the example given a head. Example results : Jathi ratnaalu, jambalakadi pambha, raja the great, kick, janaka idhi ganaka"
    //Make API call get the suggested movie results
    const response = await geminiai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: Search_Query,
    });
    const responseText = response.text;
    let rawMovies = responseText.split(',').map(m => m.trim());
    if (rawMovies.length && rawMovies[0].includes('\n')) {
      const parts = rawMovies[1].split('\n'); 
      const lastLine = parts[parts.length - 1].trim();
      rawMovies[0] = lastLine;
    }
    const movies = rawMovies.slice(0, 5);
    console.log(movies);
    //For each movie calling TMDB API
    const promiseArr =movies.map((movie)=>searchedMoviesTmdb(movie))
    const tmdbResults = await Promise.all(promiseArr)
    console.log(tmdbResults)
    dispatch(suggestedMovieResults({tmdbSearchMovies:tmdbResults, gptSearchMovies:movies}))
  }
  return (
    <div className=' pt-[36%] md:pt-[10%] w-[100%] flex justify-center pl-2 pr-2'>
        <form className='w-full  md:w-1/2  bg-black grid grid-cols-12 md:grid md:grid-cols-12 rounded-md  md:rounded-lg pr-2' onSubmit={(e)=>e.preventDefault()}>
            <input type="search" ref={SearchResult} className='text-black text-sm md:text-xl col-span-9 md:col-span-9 rounded-md md:rounded-lg p-3 md:p-3 m-1 bg-white'placeholder={lang[language].searchPlaceHolder} />
            <button className='w-full col-span-3 md:col-span-3 m-1 text-sm md:text-xl rounded-md md:rounded-lg bg-red-600 text-white hover:cursor-pointer' onClick={handleGptSearchClick}> {lang[language].Search}</button>
        </form>
    </div>
  )

}
export default GptSearchBar;