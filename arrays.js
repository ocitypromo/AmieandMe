
function printArray(array) {
    //For loop
    for (let index = 0; index < array.length; index++) {
        console.log(index + ": " + array[index]);
    }

    //While loop.
    /*var index = 0;
    while (index < array.length) {
        console.log(index + ": " + array[index]);

        index++; //index = index + 1
    }*/

    //Do While Loop
    //While condition runs at the end of each loop.
    /*var index = 0;
    do {
        console.log(index + ": " + array[index]);

        index++; //index = index + 1
    } while (index < array.length);*/
}


function printOddIndexArray(array) {

    //index += 2 is the same as index = index + 2
    for (let index = 1; index < array.length; index += 2) {
        console.log(index + ": " + array[index]);
    }
}

//Common comparisons for numbers:
// > Greater than
// < Less than
// == Equals
// <= Less than or equals
// <= Greater than or equals

//Common mathematical operations
// + Plus
// - Minus
// * Multiply
// / Divide
// % Modulo Remainder (Returns the remainder from integer division)

function printOddValuesArray(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 1) {
            console.log(index + ": " + array[index]);
        }

    }
}

var testArray1 = [7, 9, 11, 12, 4, 2, 13, 7, 8, 6, 1];
var testArray2 = [300, 331, 327, 651, 600, 200, 100, 9];

//printArray(testArray1);
//printOddIndexArray(testArray1);
printOddValuesArray(testArray1);
//0: 7
//1: 9
//2: 11
//....