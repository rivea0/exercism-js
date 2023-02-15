// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let total = 0;
    for (let birdCount of birdsPerDay) { total += birdCount; }
    return total;
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let totalInWeek = 0;
    let start = 7 * (week - 1);
    for (let i = start; i < start + 7; i++) { totalInWeek += birdsPerDay[i]; }
    return totalInWeek;
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    for (let [i, birdCount] of Object.entries(birdsPerDay)) {
      birdsPerDay[i] = (+i % 2 === 0) ? birdCount + 1 : birdCount;    
    }
    return birdsPerDay;
  }
  