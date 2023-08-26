function dateFormatter(date: string) {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 19);
  return `${day}.${month}.${year}`;
}

export default dateFormatter;
