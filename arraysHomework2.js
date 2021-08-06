//Takes an array of numbers and either adds or subtracts the numbers together depending on their index.
//On even indexes you add the the values
//On odd indexes you subtract the values.
//This function only returns the result.
function evenOddAddSubtract(array)  {
    var runningTotal = 0;

    for (let index = 0; index < array.length; index++) {
        if (numberIsEven(index)) {
            runningTotal = array[index] + runningTotal;
        }

        if (numberIsOdd(index)) {
            runningTotal = array[index] - runningTotal;
        }
    }

    return runningTotal;
}


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


var testArray1 = [7, 32, 9, 1, 2, 3, 4, 5, 6, 8, 12, 22, 21];


console.log(evenOddAddSubtract(testArray1));
//Call the evenOddAddSubtract function and pass in testArray1
//Print the result to the console here.