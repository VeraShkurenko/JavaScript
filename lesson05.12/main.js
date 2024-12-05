// Task 1
// function compare(a, b) 
//  {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     return 0;
//   }

//   let number1 = prompt("Enter the first number:");
//   let number2 = prompt("Enter the second number:");
//   alert(compare(number1, number2));



// Task 2
//   function factorial(number) 
//   {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//       result = result * i;
//     }
//     return result;
//   }

//   let number = prompt("Enter a number:");
//   alert(factorial(number));




// Task 3
//   function combine(a, b, c) 
//   {
//     return a * 100 + b * 10 + c;
//   }

//   let digit1 = prompt("Enter the first digit:");
//   let digit2 = prompt("Enter the second digit:");
//   let digit3 = prompt("Enter the third digit:");
//   alert(combine(digit1, digit2, digit3));



// Task 4
// function calculateArea(a, b) 
//   {
//     if (!b) {
//       return a * a;
//     }
//     return a * b;
//   }

//   let length = prompt("Enter the length:");
//   let width = prompt("Enter the width (or leave it empty for a square):");
//   alert(calculateArea(length, width));




// Task 5
//   function isPerfectNumber(num) 
//   {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//       if (num % i === 0) {
//         sum += i;
//       }
//     }
//     if (sum === num) {
//       return "Yes, it is a perfect number!";
//     }
//     return "No, it is not a perfect number.";
//   }

//   let perfectCheck = prompt("Enter a number to check if it is perfect:");
//   alert(isPerfectNumber(perfectCheck));




// Task 6
//   function findPerfectNumbers(min, max) 
// {
//     let result = "";
//     for (let i = min; i <= max; i++) {
//       if (isPerfectNumber(i) === "Yes, it is a perfect number!") {
//         result += i + " ";
//       }
//     }
//     return result || "No perfect numbers in this range.";
//   }

//   let rangeStart = prompt("Enter the start of the range:");
//   let rangeEnd = prompt("Enter the end of the range:");
//   alert(findPerfectNumbers(rangeStart, rangeEnd));



// Task 7
//   function formatTime(hours, minutes = 0, seconds = 0) 
//   {
//     if (hours < 10) hours = "0" + hours;
//     if (minutes < 10) minutes = "0" + minutes;
//     if (seconds < 10) seconds = "0" + seconds;
//     return `${hours}:${minutes}:${seconds}`;
//   }

//   let inputHours = prompt("Enter hours (0-23):");
//   let inputMinutes = prompt("Enter minutes (0-59):");
//   let inputSeconds = prompt("Enter seconds (0-59):");
//   alert(formatTime(inputHours, inputMinutes, inputSeconds));



// Task 8
//   function timeToSeconds(hours, minutes = 0, seconds = 0) 
//   {
//     return hours * 3600 + minutes * 60 + seconds;
//   }

//   let h = prompt("Enter hours:");
//   let m = prompt("Enter minutes:");
//   let s = prompt("Enter seconds:");
//   alert("Total seconds: " + timeToSeconds(h, m, s));



// Task 9
//   function secondsToTime(totalSeconds) 
//   {
//     let hours = Math.floor(totalSeconds / 3600);
//     let minutes = Math.floor((totalSeconds % 3600) / 60);
//     let seconds = totalSeconds % 60;
//     if (hours < 10) hours = "0" + hours;
//     if (minutes < 10) minutes = "0" + minutes;
//     if (seconds < 10) seconds = "0" + seconds;
//     return `${hours}:${minutes}:${seconds}`;
//   }

//   let totalSeconds = prompt("Enter the number of seconds:");
//   alert(secondsToTime(totalSeconds));




// Task 10
function timeDifference(h1, m1, s1, h2, m2, s2) {
    let seconds1 = timeToSeconds(h1, m1, s1);
    let seconds2 = timeToSeconds(h2, m2, s2);
    let diffSeconds = Math.abs(seconds2 - seconds1);
    return secondsToTime(diffSeconds);
}

let startHours = prompt("Enter start hours:");
let startMinutes = prompt("Enter start minutes:");
let startSeconds = prompt("Enter start seconds:");
let endHours = prompt("Enter end hours:");
let endMinutes = prompt("Enter end minutes:");
let endSeconds = prompt("Enter end seconds:");
alert("Time difference is: " + timeDifference(startHours, startMinutes, startSeconds, endHours, endMinutes, endSeconds));
