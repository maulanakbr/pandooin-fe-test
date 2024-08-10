export const actualDate = (date: number) => {
  const nights = date - 1;
  return `${date} DAYS ${nights} NIGHTS`;
};
