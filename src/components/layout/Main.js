import React from 'react'
import henrik from "../../assets/henrik-von-appen.jpg";
import Countdown from '../common/Countdown';

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
      <section>Segunda sección</section>
    </main>
  );
};

export default Main