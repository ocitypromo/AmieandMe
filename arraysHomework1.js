//3 things functions do: 
// 1.) Take in data. 
// 2.) Do some work on the data.
// 3.) Returns the result.

//What a for loop would look like if it were a while loop.
//var index = 0;
//while (index < array.length)
//{
    //Stuff inside the for loop.

    //index++;
//}

//Takes an array and adds every value in the array together.
//Returns the result of the addition.
function addAllArrayValuesTogether(array) {
    var runningTotal = 0;

    for (let index = 0; index < array.length; index++) {
        runningTotal = array[index] + runningTotal;
    }

    return runningTotal;
}


//Homework: inish the addAllArrayValuesTogether function.
//Test it and print the result.
var testArray1 = [7, 32, 9, 1, 2, 3, 4, 5, 6, 8, 12, 22, 21];
//var total = (testArray1 + array.length[index]);
//testArray1 + array[index]
//addAllArrayValuesTogether(testArray1);
var result = addAllArrayValuesTogether(testArray1);
console.log(result);

console.log(addAllArrayValuesTogether(testArray1));
