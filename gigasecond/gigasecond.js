export const gigasecond = (dateObj) => {
  const GIGASEC = 1000000000;
  let dateGiven = new Date(dateObj);
  dateGiven.setSeconds(dateGiven.getSeconds() + GIGASEC);
  return dateGiven;
};
