import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/Constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
export const useTrailerVideo = (id) => {
      // fetching the trailer video and storing the trailer video on store
  const dispatch = useDispatch()
  const trailerVideoCall = useSelector(store=>store.movie.addTrailerVideo)
  const gettingMovieTrailer = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_Options);
    const json = await data.json();
    const filterTrailer = json?.results.filter((t)=>t?.type == "Trailer");
    const trailerVideo = filterTrailer.length ? filterTrailer[0] : json?.results[0];
    dispatch(addTrailerVideo(trailerVideo))
  }
  useEffect(()=>{
    !trailerVideoCall && gettingMovieTrailer()
  },[])
}
