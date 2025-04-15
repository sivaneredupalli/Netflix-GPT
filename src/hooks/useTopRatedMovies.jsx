import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/Constants";

const useTopRatedMovies = ()=>{
      const dispatch = useDispatch()
      const topRatedMovies = async()=>
      {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_Options);
        const json = await data.json();
        const movies = json?.results;
        dispatch(addTopRatedMovies(movies));
      }
      useEffect(()=>{
        topRatedMovies()
      },[])
}
export default useTopRatedMovies;