export const titleClear = (title: string) => {
  if (title.includes('[PREMIUM TRIP]')) {
    return title.replace('[PREMIUM TRIP] ', '');
  }

  return title;
};
