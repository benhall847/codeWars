// Complete the function which takes two arguments and returns
//  all numbers which are divisible by given divisor. First 
// argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
    function isDivisible(number){
        return number % divisor === 0
    }
    return numbers.filter(isDivisible);
}

// let myArray = [1, 2, 3, 4, 5, 6];

// console.log(divisibleBy(myArray, 2))