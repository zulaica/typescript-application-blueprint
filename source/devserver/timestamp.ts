const timestamp = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = padTimeUnit((date.getMonth() + 1).toString());
  const day = padTimeUnit(date.getDate().toString());
  const hour = padTimeUnit(date.getHours().toString());
  const minute = padTimeUnit(date.getMinutes().toString());
  const second = padTimeUnit(date.getSeconds().toString());

  return `[${year}-${month}-${day} ${hour}:${minute}:${second}]`;
};

const padTimeUnit = str => str.padStart(2, '0');
