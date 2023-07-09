/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */
 
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
prices[0] = 3.99;
prices[2] = 88.99;
prices[6] = 31.99;

console.log(prices);

// Output [ 3.99, 48.11, 88.99, 8.5, 9.99, 1, 31.99, 67 ]