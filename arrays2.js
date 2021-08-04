function printOddValuesArray(array) {
    for (let index = 0; index < array.length; index++) {
        if (numberIsOdd(array[index])) {
            console.log(index + ": " + array[index]);
        }
    }
}

function printValuesArray(array, comparison) {
    for (let index = 0; index < array.length; index++) {
        if (comparison(array[index])) {
            console.log(index + ": " + array[index]);
        }
    }
}

//Write a function that adds value to each element of the array.
//Returns the resulting array.
function addValueToArray(array, value) {
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index] + value;
    }

    value = 12; //Does not change the original value that is passed in.
    //array is changed though because it is passed by reference.
    //value is passed by value.
}

//if (something is true) { do something }
//else if (something else is true, but not the first thing) { do something else }
//else { do something if nothing else was true }

function numberIsOdd(value) {
    if (value % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

function numberIsEven(value) {
    if (value % 2 == 0) {
        return true;       
    } else {
        return false;
    }
}

//Same as numberIsEven
function numberIsNotOdd(value) {
    return !numberIsOdd(value);
}

function numberIsEvenSimple(value) {
    return value % 2 == 0;
}

var testArray1 = [7, 9, 11, 12, 4, 2, 13, 7, 8, 6, 1];
var testArray2 = [300, 331, 327, 651, 600, 200, 100, 9];
var testArray3 = ["dogs", "cats", 3];
//console.log();

//printOddValuesArray(testArray2);
//printValuesArray(testArray2, numberIsEvenSimple);
var valueToAdd = 4;
addValueToArray(testArray1, valueToAdd);

console.log(testArray1);
console.log(valueToAdd);
