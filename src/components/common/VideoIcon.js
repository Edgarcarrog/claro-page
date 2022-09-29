import { useContext } from "react";
import { context } from "../../context/context";
import { VIDEO_SRC } from "../../consts/index";

const VideoIcon = ({data}) => {
  const { setVideoSrc } = useContext(context);
  return (
    <div className="video-item">
      <button onClick={() => setVideoSrc(VIDEO_SRC[data.title])}>
        <img src={data.src} alt={data.src} />
      </button>
      <p>{data.title}</p>
    </div>
  );
}

export default VideoIcon;