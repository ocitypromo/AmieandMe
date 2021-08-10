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

/*
numberOfPermutations is set to a literal 5
count is set to 3
lastLastNumber is set to 1
lastNumber is set to 1
result is set to 2
--
lastLastNumber is now set to 1
lastNumber is now set to 2
count is now 4
result is now set to 3
--
lastLastNumber is now set to 2
lastNumber is now set to 3
count is now 5
result is now set to 5
--
lastLastNumber is now set to 
lastNumber is now set to 
count is now 
result is now set to 
*/

//Precondition: numberOfPermutations is a number
//Precondition: numberOfPermutations >= 1
function printFibonacciSequence(numberOfPermutations)
{
    var resultText = "Result:"; 
    
    //if (numberOfPermutations == 1 || numberOfPermutations == 2)
    //    return 1;
     // += is the same as saying: resultText = resultText + " 1 1";
   
    if (numberOfPermutations == 1)
        resultText += " 1";
    else if (numberOfPermutations == 2)
        resultText += " 1 1";
    else {  
        var lastNumber = 1;
        var lastLastNumber = 1;
        var result;

        resultText += " 1 1";

        //count++ -- count = count + 1
        for (let count = 3; count <= numberOfPermutations; count++) {
            result = lastNumber + lastLastNumber;
            lastLastNumber = lastNumber;
            lastNumber = result;
            //"Result: 7 3 ... etc"
            resultText = resultText + " " + result;          
        }
    }

    console.log(resultText);
    
    //Instead of returning the result, we print it out with console.log. But what do you put here?
}

printFibonacciSequence(5);
printFibonacciSequence(1);
//Be sure to call your function to test it! (Write your test functions) Only print the result once though.

//Homework too: Interpret this like the computer would and calculate the results by hand. 
