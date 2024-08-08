export const titleCase = (title: string) => {
  const titleLength = title.split(' ').length;
  const ifTitleMoreThanOneWord: string[] = [];

  if (titleLength > 1) {
    title
      .split(' ')
      .forEach((val) =>
        ifTitleMoreThanOneWord.push(val.charAt(0).toUpperCase() + val.slice(1))
      );

    return ifTitleMoreThanOneWord.join(' ');
  }

  return title.charAt(0).toUpperCase() + title.slice(1);
};
