export const truncate = (text: string, limit: number) => {
  if (limit > text.length) {
    return text;
  }

  return `${text.slice(0, limit)}...`;
};
