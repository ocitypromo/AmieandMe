//Write a function that takes an array of numbers. Validate that the array is numbers.
//The function will add the lowest pairs of numbers together, and outputs the result as an array. 
//For example: If you have an array [6, 7, 9, 1] it will output [7, 16]
//If the array has an odd number of elements, add the remaining number to the return array in sorted order. [6, 7, 9, 1, 10] -> [7, 10, 16]
//Be sure to plan out how you will do this first.

//[1, 5, 4, 3, 9, 7, 6, 2] -> [3]
//[5, 4, 3, 9, 7, 6] -> [3, 7]
//[5, 9, 7, 6] -> [3, 7, 11]
//[9, 7] -> [3, 7, 11, 16]
//[] -> return this array

//Algorithm: 
//
//

//Boolean logic: 
//Operators: And and Or (&& and ||)
//Truth table for And (&&)
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

//Truth table for Or (||)
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

//You can store boolean values in variables, and do boolean operations on them.
//var isTrue = true;
//isTrue = isTrue && false; 
//isTrue will be false
//var isTrue = false;
//isTrue = isTrue || true;
//isTrue will be true
//var a = 8;
//var isTrue = a == 8;
//isTrue is true
//isTrue = a == 8 || a == 4;
//isTrue is true
//isTrue = a / 2 == 4 && a / 4 == 2;
//isTrue is true.

//arrayIsNumbers algorithm:
//
//look at each number in the array
//check if value is number or integer in each 
//continue loop until false
//return true if number
//typeof??

//Returns true if the array is composed only of numbers
//Otherwise returns false.
function arrayIsNumbers(inputArray) {   
    let isNumber = true;

    for (let i = 0;isNumber && i < inputArray.length; i++) {
        isNumber = typeof inputArray[i] === 'number';
    }

    return isNumber;
}

function arrayIsNumbersIfStatement(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] != 'number')
            return false;
    }

    return true;
}

function arrayIsNumbersForEach(inputArray) {
    var isNumber = true;
    var checkIsNumber = (number) => isNumber = isNumber && typeof number == 'number';

    inputArray.forEach(checkIsNumber);

    return checkIsNumber;
}

function addSmallestElementsTogether(inputArray)  {

}

var badArray = [1, 'apple', 2, 3];
var testArray1 = [1, 5, 4, 3, 9, 7, 6, 2];
addSmallestElementsTogether(testArray1);
