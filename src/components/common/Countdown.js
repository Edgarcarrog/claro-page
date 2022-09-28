import React, { useState, useEffect } from 'react'
import Timer from './Timer';

const Countdown = () => {
  const lastDate = new Date(2022, 9, 1, 0, 0, 0, 0);
  const [time, setTime] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    let intervId =setInterval(() => {
      const currentTime = new Date(Date.now());
      const difMilisec = lastDate - currentTime;
      const days = parseInt(difMilisec / (1000 * 60 * 60 * 24));
      const hours = parseInt(
        (difMilisec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = parseInt((difMilisec % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = parseInt((difMilisec % (1000 * 60)) / 1000);
      setTime({ days, hours, minutes, seconds });
      
    }, 10);
    return () => {
      clearInterval(intervId);
    };
  }, []);

  return (
    <div className="count-container">
      <h3>Faltan</h3>
      <div className="timer">
        <Timer data={time.days} unit="días" />
        <Timer data={time.hours} unit="hrs" />
        <Timer data={time.minutes} unit="min" />
        <Timer data={time.seconds} unit="seg" />
      </div>
    </div>
  );
};

export default Countdown
