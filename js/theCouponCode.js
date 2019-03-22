// Task
// Your mission:
// Write a function called which verifies that a coupon code is valid,
// the coupon is not expired.

// A coupon is no more valid on the day AFTER the expiration date.
// All dates will be passed as strings in this format: "MONTH DATE, YEAR".


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return (new Date(currentDate)) <= (new Date(expirationDate)) && enteredCode === correctCode
};