import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/Constants";

const usePopularMovies = ()=>{
      const dispatch = useDispatch()
      const popularMovies = async()=>
      {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Options);
        const json = await data.json();
        const movies = json?.results;
        dispatch(addPopularMovies(movies));
        console.log(movies)
      }
      useEffect(()=>{
        popularMovies()
      },[])
}
export default usePopularMovies;