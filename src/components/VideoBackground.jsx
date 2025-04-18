import { useTrailerVideo } from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux'

const VideoBackground = ({id}) => {
  useTrailerVideo(id)
  const trailer = useSelector(store => store.movie?.addTrailerVideo)
  return (
    <div className='w-screen'> 
      <iframe className='w-screen aspect-video' 
      src={"https://www.youtube.com/embed/"+trailer?.key + "?autoplay=1&mute=1&controls=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground;