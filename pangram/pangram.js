export const isPangram = (str) => {
  // The length should be the number of letters in the alphabet
  return new Set(str.toLowerCase().split(/[\W_\d]/).join('')).size === 26;
};
