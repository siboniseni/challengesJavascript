/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */
var laughing = "";

var laugh = function(max) {
    
    for (var i = 0; i < max; i++) {
        laughing += "ha"
    }
    return laughing;
}

console.log(laugh(3)+ "!");
