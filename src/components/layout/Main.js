import React from 'react'
import henrik from "../../assets/henrik-von-appen.jpg";
import Countdown from '../common/Countdown';
import VideoIcon from '../common/VideoIcon';
import { VIDEO_IMAGE } from "../../consts/index";

const Main = () => {
  return (
    <main>
      <section className="principal">
        <div className="bg-container">
          <Countdown />
          <div className="photo-container">
            <img src={henrik} alt="logo-sochi" />
          </div>
        </div>
      </section>
      <section>
        <h1>Claro sports en Sochi 2014</h1>
        <div className="videos-container">
          {VIDEO_IMAGE.map((data) => (
            <VideoIcon data={data} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main