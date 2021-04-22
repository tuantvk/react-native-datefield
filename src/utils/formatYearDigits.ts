export default (year: number) => {
  let fullYear = new Date().getFullYear();
  if (!year || year <= 0 || String(year).length === 3) {
    return fullYear;
  }
  if (String(year).length === 4) {
    return year;
  }
  if (year >= 0 && year < 100) {
    let shortYear = fullYear % 100;
    let m1 = fullYear - shortYear;
    let m2 = m1 - 100;
    let opt1 = year + m1;
    let opt2 = year + m2;
    return Math.abs(fullYear - opt1) < Math.abs(fullYear - opt2) ? opt1 : opt2;
  }
};
