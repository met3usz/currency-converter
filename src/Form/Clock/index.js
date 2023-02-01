import { ClockContent } from './styled';
import { useCurrentDate } from './useCurrentDate';

const Clock = () => {
  const date = useCurrentDate();
  return <ClockContent>Dzisiaj jest: {date}</ClockContent>;
};

export default Clock;
