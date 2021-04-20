export default (today: Date, from?: Date, to?: Date) => {
  if (from && to) {
    const timeFrom = new Date(from).getTime();
    const timeTo = new Date(to).getTime();
    return today.getTime() >= timeFrom && today.getTime() <= timeTo;
  }
  if (from) {
    return today.getTime() >= new Date(from).getTime();
  }
  if (to) {
    return today.getTime() <= new Date(to).getTime();
  }
  return false;
};
