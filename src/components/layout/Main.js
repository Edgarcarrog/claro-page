import React, { useContext, useEffect } from 'react'
import Countdown from '../common/Countdown';
import VideoIcon from '../common/VideoIcon';
import { VIDEO_IMAGE, VIDEO_SRC } from "../../consts/index";
import { context } from "../../context/context";

const Main = () => {
  const { videoSrc, setVideoSrc } = useContext(context);

  useEffect(() => {
    setVideoSrc(VIDEO_SRC["team latam"]);
  }, []);

  return (
    <main>
      <section className="principal">
        <div className="bg-container">
          <Countdown />
          <div className="photo-container">
            <iframe
              className="frame"
              src={videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section>
        <h1>Claro sports en Sochi 2014</h1>
        <div className="videos-container">
          {VIDEO_IMAGE.map((data, index) => (
            <VideoIcon key={index} index={index} data={data} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main