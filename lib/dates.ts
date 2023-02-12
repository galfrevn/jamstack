export const hasOneDayPassed = (targetDate: Date) => {
  const currentDate = new Date();
  const difference = currentDate - targetDate;
  const oneDay = 24 * 60 * 60 * 1000;

  return difference >= oneDay;
};
