import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/Constants";

const useNowPlayingMovie = ()=>{
      const dispatch = useDispatch()
      const nowPlayingMovies = async()=>
      {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options);
        const json = await data.json();
        const movies = json?.results;
        dispatch(addMovies(movies));
        console.log(movies)
      }
      useEffect(()=>{
        nowPlayingMovies()
      },[])
}
export default useNowPlayingMovie;