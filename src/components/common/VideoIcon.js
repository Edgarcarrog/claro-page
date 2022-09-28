
const VideoIcon = ({data}) => {
  return (
    <div className="video-item">
      <div>
        <embed type="video/webm" src="/media/cc0-videos/flower.mp4" autostart />
      </div>
      {/* <img src={data.src} alt="team-latam" /> */}
      <p>{data.title}</p>
    </div>
  );
}

export default VideoIcon;