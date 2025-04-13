import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/Constants";

const useUpcomingMovies = ()=>{
      const dispatch = useDispatch()
      const upComingMovies = async()=>
      {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options);
        const json = await data.json();
        const movies = json?.results;
        dispatch(addUpcomingMovies(movies));
        console.log(movies)
      }
      useEffect(()=>{
        upComingMovies()
      },[])
}
export default useUpcomingMovies;