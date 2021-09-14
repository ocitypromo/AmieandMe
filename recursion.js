console.log("Fibonacci Function Evaluations 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...");
console.log("=====================================================================");
console.log("Note: Do these line by line.");
console.log(" ");

//computefibonacciWhileLoop: numberOfTimes = 6
//fib = 1
//nMinus2 = 1
//nMinus1 = 1
//counter = 4
//--
//fib = 2
//nMinus2 = 1
//nMinus1 = 2
//counter = 5
//--
//fib = 3
//nMinus2 = 2
//nMinus1 = 3
//counter = 6
//--
//fib = 5
//nMinus2 = 3
//nMinus1 = 5
//counter = 7
function doSomething() {
    //Weeee
}

function computeFibonacciWhileLoop(numberOfTimes) {
    var nMinus2 = 0;
    var nMinus1 = 1;

    if (numberOfTimes <= 1)
        return nMinus2;
    else if (numberOfTimes == 2)
        return nMinus1;

    var counter = 3;
    var fib = 0;
    
    while (counter <= numberOfTimes) {
        fib = nMinus2 + nMinus1;
        nMinus2 = nMinus1;
        nMinus1 = fib;

        counter++; //counter = counter + 1 another way to say it is counter += 1
    }

    return fib;
} //15 lines.

console.log("While Loop Computation Result: ");
console.log(" - Result: " + computeFibonacciWhileLoop(6));

//-----------------------------------------------------

//numberOfTimes = 6
//nMinus2 = 0
//nMinus1 = 1
//fib = -1
//n = 3
//---
//fib = 1
//nMinus2 = 1
//nMinus1 = 1
//n = 4
//---
//fib = 2
//nMinus2 = 1
//nMinus1 = 2
//n = 5
//---
//fib = 3
//nMinus2 = 2
//nMinus1 = 3
//n = 6
//---
//fib = 5
//nMinus2 = 3
//nMinus1 = 5
//n = 7

//Get the result of computing the fibonacci sequence <numberOfTimes> of times.
function computeFibonacciForLoop(numberOfTimes) {
    var nMinus2 = 0;
    var nMinus1 = 1;
    var fib = -1;
    
    if (numberOfTimes <= 1)
        return nMinus2;
    else if (numberOfTimes == 2)
        return nMinus1;

    for (let n = 3; n <= numberOfTimes; n++) {
        fib = nMinus2 + nMinus1;
        nMinus2 = nMinus1;
        nMinus1 = fib;
    }

    return fib;
} //13 lines.

console.log(" ");
console.log("For Loop Computation Result: ");
console.log(" - Result: " + computeFibonacciForLoop(6));



//-----------------------------------------------------
//The Call Stack becomes hugely important here to understand.
//
//call 0: numberOfTimes = 6, permutation = 3, nMinus2 = 0, nMinus1 = 1
//fib_0 = 1
//computeFibonacciRecursive(6,4,1,1)
//call 1: numberOftimes = 6, permutation = 4, nMinus2 = 1, nMinus1 = 1
//fib_1 = 2
//computeFibonacciRecursive(6,5,1,2)
//call 2: numberOfTimes = 6, permutation = 5, nMinus2 = 1, nMinus1 = 2
//fib_2 = 3
//computeFibonacciRecursive(6,6,2,3)
//call 3: numberOfTimes = 6, permutation = 6, nMinus2 = 2, nMinus1 = 3
//fib_3 = 5
//call 3: return 5 -- unwind the call stack
//call 2: return 5 -- unwind the call stack
//call 1: return 5 -- unwind  the call stack
//call 0: return 5 -- back to original calling function

// - Call 0
//   - Call 1
//      - Call 2
//          - Call 3 Returns to Call 2
//      - Call 2 Returns to call 1
//  - Call 1 Returns to call 0
// - Call 0 Returns out of the function



//Get the result of computing the fibonacci sequence <numberOfTimes> of times.
function computeFibonacciRecursive(numberOfTimes, permutation = 3, nMinus2 = 0, nMinus1 = 1) {
    if (numberOfTimes <= 1)
        return 0;
    else if (numberOfTimes == 2)
        return 1;
    
    var fib = nMinus1 + nMinus2;

    if (permutation == numberOfTimes) 
        return fib;
    
    return computeFibonacciRecursive(numberOfTimes, ++permutation, nMinus1, fib);
} //8 lines.

console.log(" ");
console.log("Recursive Computation Result: ");
console.log(" - Result: " + computeFibonacciRecursive(6));
