import { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";


const VideoContainer = () => {

  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  }
  
  return (
    <div className="flex flex-row flex-wrap">{
      videos.map((video) => <VideoCard key={video.id} info={video} />)
    }</div>
  )
}

export default VideoContainer