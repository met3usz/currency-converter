import './style.css';
import { useCurrentDate } from './useCurrentDate';

const Clock = () => {
  const date = useCurrentDate();
  return (
    <div>
      <p className="fieldset__clock">Dzisiaj jest: {date}</p>
    </div>
  );
};

export default Clock;
