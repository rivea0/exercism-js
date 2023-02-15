// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
    return (remainingTime === 0 ? 'Lasagna is done.' : ((remainingTime) ? 'Not done, please wait.' : 'You forgot to set the timer.'));
}


export function preparationTime(layers, avgPrepTime) {
  return avgPrepTime ? layers.length * avgPrepTime : layers.length * 2;
}


export function quantities(layers) {
  let noodleQuantity = layers.filter((layer) => layer === 'noodles').length * 50;
  let sauceQuantity = layers.filter((layer) => layer === 'sauce').length * 0.2;
  return { 'noodles': noodleQuantity, 'sauce': sauceQuantity };
}


export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}


export function scaleRecipe(recipe, numPortions) {
  let newRecipe = {};
  for (let ing of Object.keys(recipe)) { 
    newRecipe[ing] = (recipe[ing] / 2) * numPortions; 
  }
  return newRecipe;
}
