/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */


// creates a line of * for a given length
function makeLine(length) {
    
    var line = "";
    
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    
    return line + "\n";
}

function buildTriangle(x) {
    
    var triangle = "";

    for (var i = 0; i <= x; i++) {
        triangle += makeLine(i);
    }

    return triangle;
}

console.log(buildTriangle(10));