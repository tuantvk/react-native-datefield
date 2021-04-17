export default (value: Date | undefined) => {
  if (value) {
    return {
      date: String(value.getDate()),
      month: String(value.getMonth() + 1),
      year: String(value.getFullYear()),
    };
  }
  return {
    date: '',
    month: '',
    year: '',
  };
};
