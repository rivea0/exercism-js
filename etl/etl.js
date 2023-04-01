export const transform = (oldData) => {
  let result = {};
  Object.entries(oldData).map(([n, values]) => {
    values.map(letter => result[[letter.toLowerCase()]] = +n);
  });
  return result;
};
