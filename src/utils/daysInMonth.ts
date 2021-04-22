import int from './int';

type Props = {
  date: string;
  month: string;
  year: string;
};

export default ({ date, month, year }: Props): string => {
  let current = new Date(int(year), int(month), 0).getDate();
  return int(date) > current ? String(current) : date;
};
