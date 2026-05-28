
type VideoCardProps = {
  info: any;
};

const VideoCard = ({ info }: VideoCardProps) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails } = snippet;
    const {viewCount} = statistics;
  return (
    <div className="flex flex-col w-96 h-[350px] m-2 mx-4 p-3 shadow-lg rounded-lg">
      <img alt="thumbnail" src={thumbnails.medium.url} />
      <span className="font-semibold">{title}</span>
      <span>{channelTitle}</span>
      <span>{(viewCount/1000000).toFixed(1)}M views</span>
    </div>
  )
}

export default VideoCard;