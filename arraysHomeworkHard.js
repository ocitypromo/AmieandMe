//Write a function that takes an array of numbers.
//If the array does not have an even number of elements, return null
//If the array has an even number of elements, add every 2 elements together and store it in a new array.
//return the new array.
function addEveryTwoElements (array) {
    for (let i=0 i < array)

}
var oddArray = [7, 32, 9, 1, 2, 3, 4, 5, 6, 8, 12, 22, 21];
var evenArray = [77, 31, 3, 14, 1, 4, 5, 6, 7, 9, 11, 20];
var oddArrayResults = addEveryTwoElements(oddArray);
var evenArrayResults = addEveryTwoElements(evenArray);

console.log(oddArray, oddArrayResults);

console.log(oddArrayResults, evenArrayResults);
//Call the function with a test array (one with even number of elements and one with an odd number of elements)
//Output the result of that call to the console via console.log.

//array[index] means get the value of the array at the index (the value of the variable named index)
//array[index + 1] get the value of the array at the element to the right of the index

//When doing this, remember if you do array[index + 1] and index + 1 >= array.length, you will get an error.
//You shouldn't be dealing with that issue if you're doing it right though.