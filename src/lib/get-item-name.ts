export const getItemName = (name: string) => {
  return name.includes('-') ? name.split('-').join(' ') : name;
};
