import React, { useState, useEffect } from 'react'

const Countdown = () => {
  const fechaFinal = new Date(2022, 8, 28, 1, 0, 0, 0);
  const [time, setTime] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  

  useEffect(() => {
    let nIntervId =setInterval(() => {
      const currentTime = new Date(Date.now());
      const difMilisec = fechaFinal - currentTime;
      const days = parseInt(difMilisec / (1000 * 60 * 60 * 24));
      const hours = parseInt(
        (difMilisec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = parseInt((difMilisec % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = parseInt((difMilisec % (1000 * 60)) / 1000);
      setTime({ days, hours, minutes, seconds });
      return () => {
        clearInterval(nIntervId);
    }
    }, 10);
  }, []);

  return (
    <div className="count-container">
      <p>{`${time.days} Días ${time.hours} horas ${time.minutes} minutos ${time.seconds} segundos`}</p>
    </div>
  );
};

export default Countdown
