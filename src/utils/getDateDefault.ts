export default (value?: Date | null) => {
  if (value) {
    return {
      date: String(value.getDate()),
      month: String(value.getMonth() + 1), // new Date(year, monthIndex, day)
      year: String(value.getFullYear()),
    };
  }
  return {
    date: '',
    month: '',
    year: '',
  };
};
