// Complete the function which takes two arguments and returns
//  all numbers which are divisible by given divisor. First 
// argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
    return numbers.filter(num => num % divisor === 0);
}

let myArray = [1, 2, 3, 4, 5, 6];

console.log(divisibleBy(myArray, 2))