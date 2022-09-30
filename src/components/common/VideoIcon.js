import { useContext } from "react";
import { context } from "../../context/context";
import { VIDEO_SRC } from "../../consts/index";

const VideoIcon = ({ data, index }) => {
  const { setVideoSrc, videoText, changeVideoText } = useContext(context);
  
  const updateVideo = () => {
    setVideoSrc(VIDEO_SRC[data.title]);
    changeVideoText(index);
  };

  return (
    <div className="video-item">
      <button onClick={updateVideo}>
        <div className={`text-item ${videoText[index] ? "" : "hidden"}`}>
          <div>
            <p>Los Deportistas latinoamericanos que participan en Sochi 2014</p>
          </div>
        </div>
        <img src={data.src} alt={data.src} />
      </button>
      <p>{data.title}</p>
    </div>
  );
};

export default VideoIcon;