import { ClockContent } from './styled';
import { useCurrentDate } from './useCurrentDate';

const clockFormat = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

const Clock = () => {
  const date = useCurrentDate();
  const formattedDate = date.toLocaleString(undefined, clockFormat);

  return <ClockContent>Dzisiaj jest: {formattedDate}</ClockContent>;
};

export default Clock;
