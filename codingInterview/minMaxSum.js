/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

* Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let min = 0;
    let max = 0;
    let sum = 0;
    
    let sortedArr = arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        }
        min = sum - arr[arr.length - 1];
        max = sum - arr[0];
        
        console.log(min, max);
    }

    miniMaxSum(arr);