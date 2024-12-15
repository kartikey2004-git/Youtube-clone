/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


function Video({video}) {
  console.log(video);
  
  return (
    <div className="ml-96zzz">
      <Link to={`/video/${video?.videoId}`}>
      <div>
        <div className="flex">
          <img src={video?.thumbnails[0]?.url} alt=""/>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Video

