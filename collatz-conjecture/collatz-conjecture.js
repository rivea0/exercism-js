export const steps = (n) => {
  if (n <= 0) throw new Error('Only positive numbers are allowed');
  if (n === 1) return 0;
  return (n % 2) ? steps(n * 3 + 1) + 1 : steps(n / 2) + 1;
};
