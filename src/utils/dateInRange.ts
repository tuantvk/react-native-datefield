export default (today: Date, from?: Date, to?: Date) => {
  let timeToday = today.getTime();
  if (from && to) {
    return (
      timeToday >= new Date(from).getTime() &&
      timeToday <= new Date(to).getTime()
    );
  }
  if (from) {
    return timeToday >= new Date(from).getTime();
  }
  if (to) {
    return timeToday <= new Date(to).getTime();
  }
  return false;
};
