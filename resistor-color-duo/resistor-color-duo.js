const COLORS_MAPPED = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9,
};

export const decodedValue = (colors) => {  
  return +`${COLORS_MAPPED[colors[0]]}${COLORS_MAPPED[colors[1]]}`;
};
