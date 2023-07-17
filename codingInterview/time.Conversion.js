/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


var s = '11:01:00PM'  // output 23:01:00PM

function timeConversion(s) {
    // Write your code here
    let hour = " ";
    if (s.substring(0, 2) === "12") {
        if (s.substring(8) === "AM") {
            hour = "00";
        } 
        else {
            hour = "12";
        }
    } 
    else if (s.substring(8) === "AM" && Number(s.substring(0, 2)) < 12) {
        hour = s.substring(0, 2);
    }
    else {
        hour = Number(s.substring(0, 2)) + 12;
    }
    
    return hour + s.substring(2);
}

console.log(timeConversion(s));