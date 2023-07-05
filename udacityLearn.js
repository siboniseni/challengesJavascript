
//var isGoing = false;
//var color = isGoing ? "green" : "red";
//console.log(color);

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = false;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

var category = (eatsPlants && eatsAnimals) ? "omnivore" : (!eatsPlants && eatsAnimals) ? "carnivore" : 
(eatsPlants && !eatsAnimals) ? "herbivore" : "undefined";

console.log(category);