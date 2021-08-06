//Using the calculateFibonacciValue, rewrite the function that prints using console.log every value of the fibonaccisequence for the numberOfPermutations we supply.
//Example: printFibonacciSequence(6) will output: 1 1 2 3 5 8
//Example: printFibonacciSequence(1) will output: 1
//Example printFibonacciSequence(10) will output: 1 1 2 3 5 8 13 21 34 55

//Remember, you can use strings.
//var resultText = "Result: ";
//resultText = resultText + 7 + " ";
//resultText = resultText + 3 + " ";
//console.log(resultText);
//This will print out "Result: 7 3 "

function printFibonacciSequence(numberOfPermutations)
{
    if (numberOfPermutations == 1 || numberOfPermutations == 2)
        return 1;

    var lastNumber = 1;
    var lastLastNumber = 1;
    var result;
    var resultText = ""; //Sets this to a string type.

    for (let count = 3; count <= numberOfPermutations; count++) {
        result = lastNumber + lastLastNumber;
        lastLastNumber = lastNumber;
        lastNumber = result;
    }

    console.log(???); //Instead of returning the result, we print it out with console.log. But what do you put here?
}


//Be sure to call your function to test it! (Write your test functions) Only print the result once though.

//Homework too: Interpret this like the computer would and calculate the results by hand. 
