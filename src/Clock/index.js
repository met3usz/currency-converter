import { useEffect, useState } from 'react';
import './style.css';

const Clock = () => {
  const clockFormat = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

  const formatedDate = date.toLocaleString(undefined, clockFormat);

  return (
    <>
      <p className="fieldset__clock">Dzisiaj jest: {formatedDate}</p>
    </>
  );
};

export default Clock;
