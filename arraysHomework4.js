/*create a function that accepts an array of odd numbers (and only odd numbers), 
and multiply them together to get a single result. Be sure to validate the input 
data to make sure that there are only odd numbers in the function call. If there 
is an even number in the list or the array is invalid, return 0; 

Use multiplyOddNumbers(inputArray) for the function definition. 
Use [1, 2, 3, 4, 5] and [1, 3, 5, 7 , 9] for your test arrays.
Print out the result of the calls for those 2 arrays.
multiply the results of the calls for those 2 arrays together and print the result.

[3, 5, 7] => 3 * 5 * 7 = 105

checkIfOdd:
To validate if array at index is odd
look at each number
check if number is odd/even
if odd continue to next number
if even stop, because not all odd

--
check if input isArray
    if isArray is false, return false
    if isArray is true, continue on
for every number X in input
    if X is odd, continue to next
    if X is even, return false
continue to next X
return true

--
check if input isArray
    if isArray is false, return false
for every number X in input
    if X is even, return false
return true

[3, 5, 7] => 3 * 5 * 7 = 105

multiplyOddNumbers:
Check to make sure it is only odd numbers.
    if not, what?

write down first number as result


while there are stll numbers that havent been multiplied
    multiply each number with the previous result
    write down result of multiplication as new result

return result

---
function multiplyOddNumbers(array)

//Check to make sure it is only odd numbers. if not, what?
    if checkIfArrayContainsOddNumbers(array) = false
        return 0;


//write down first number as result
var result = firstNumber


//while there are stll numbers that havent been multiplied
for (index = 0; index < index.length; index++)
//multiply each number with the previous result
    newResult = result * array[index]

//write down result of multiplication as new result
result = newResult


//return result
return result

---












*/

function checkIfArrayContainsOddNumbers(inputArray) {
    if (Array.isArray(inputArray) == false)
        return false;

    if (inputArray.length == 0)
        return false;

    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] % 2 == 0)
            return false;
    }

    return true; 
}

function multiplyOddNumbers(array) {
    //Check to make sure it is only odd numbers. if not, what?
    if (checkIfArrayContainsOddNumbers(array) == false)
        return 0;

    //write down first number as result
    var result = array[0];

    //while there are stll numbers that havent been multiplied
    for (let index = 1; index < array.length; index++) {
        //multiply each number with the previous result
        newResult = result * array[index];
    
        //write down result of multiplication as new result
        result = newResult;
    }

    //return result
    return result;

}

var notAnArray = 8;

var testArray1 = [1, 2, 3, 4, 5];
var testArray2 = [1, 3, 5, 7, 9]; //Should be 945
var testArray3 = [3, 7]; //Should be 21
var testArray4 = [7, 7, 1];
var testArray5 = [];
var testArray6 = [1];
//console.log(checkIfArrayContainsOddNumbers(testArray2));
console.log(multiplyOddNumbers(testArray1));
console.log(multiplyOddNumbers(testArray2));
console.log(multiplyOddNumbers(testArray3));
console.log(multiplyOddNumbers(testArray4));
console.log(multiplyOddNumbers(testArray5));
console.log(multiplyOddNumbers(testArray6));
console.log(multiplyOddNumbers(notAnArray));
/*
//For a 2nd set of test data, use the following: [5, 7, 9, 11, 13] and [23, 25, 27, 29]
//Be sure to multiply the result of those 2 and print the result as well. The result of 
//multiplying the first set should be 0. The result of multiplying the second set should 
//be a fairly sizeable number.


var testArrayZero = [5, 7, 9, 11, 13];
var testArrayBig = [23, 25, 27, 29];
*/