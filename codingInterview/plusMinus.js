/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
though answers with absolute error of up to  are acceptable.

 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;
   
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > 0) {
           positive++;
       } 
       else if (arr[i] < 0) {
           negative++;
       } 
       else {
           zero++;
       }
    }
   
   const posRatio = positive / arr.length;
   const negRatio = negative / arr.length;
   const zeroRatio = zero / arr.length;
   
   console.log(posRatio.toFixed(6)); 
   console.log(negRatio.toFixed(6));
   console.log(zeroRatio.toFixed(6));
}