/*create a function that accepts an array of odd numbers (and only odd numbers), 
and multiply them together to get a single result. Be sure to validate the input 
data to make sure that there are only odd numbers in the function call. If there 
is an even number in the list, return 0; 

Use multiplyOddNumbers(inputArray) for the function definition. 
Use [1, 2, 3, 4, 5] and [1, 3, 5, 7 , 9] for your test arrays.
Print out the result of the calls for those 2 arrays.
multiply the results of the calls for those 2 arrays together and print the result.



*/
function multiplyOddNumbers(inputArray) {
    var  = [];

    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] % 2 == 1) {
            console.log(index + ": " + inputArray[index]);

        }
    }

}


var testArray1 = [1, 2, 3, 4, 5];
var testArray2 = [1, 3, 5, 7, 9];

multiplyOddNumbers(testArray1);
multiplyOddNumbers(testArray2);
//For a 2nd set of test data, use the following: [5, 7, 9, 11, 13] and [23, 25, 27, 29]
//Be sure to multiply the result of those 2 and print the result as well. The result of 
//multiplying the first set should be 0. The result of multiplying the second set should 
//be a fairly sizeable number.


var testArrayZero = [5, 7, 9, 11, 13];
var testArrayBig = [23, 25, 27, 29];
