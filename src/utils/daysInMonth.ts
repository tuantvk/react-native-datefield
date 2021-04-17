import int from './int';

export default (date: string, month: string): string => {
  let day = new Date(new Date().getFullYear(), int(month), 0).getDate();
  if (int(date) > day) {
    return String(day);
  }
  return date;
};
