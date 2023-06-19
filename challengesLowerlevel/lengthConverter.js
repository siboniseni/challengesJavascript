/*
Create a length converter function
Let’s start with a conversion from kilometers to miles. 
The function should include the input in kilometers and return the answer in miles.
*/

const kiloMeter = prompt("Enter Kilometers: ")

    // 1KL == 0.621371 MILES
    
    mile = 0.621371 * kiloMeter;
    
    console.log(kiloMeter +' kilometers is '+ mile);