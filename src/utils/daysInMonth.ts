import int from './int';

type Props = {
  date: string;
  month: string;
  year: string;
};

export default ({ date, month, year }: Props): string => {
  let day = new Date(int(year), int(month), 0).getDate();
  if (int(date) > day) {
    return String(day);
  }
  return date;
};
