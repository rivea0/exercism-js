export const age = (planet, seconds) => {
  const SEC_IN_YEAR = 31557600;
  const EARTH_YEARS = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    uranus: 84.016846,
    saturn: 29.447498,
    neptune: 164.79132
  }

  return +parseFloat(seconds / (EARTH_YEARS[planet] * SEC_IN_YEAR)).toFixed(2);  
};
