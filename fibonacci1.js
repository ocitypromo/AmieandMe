//write a function that calculates a fibonacci sequence and returns the number at the permutations supplied.
//So if I want the 3rd permutation: 1 1 2 -- it returns 2.
//If I want the 10th permutation: 1 1 2 3 5 8 13 21 34 55 (returns 55)

//binary/boolean operators
//&& is And. So if you have true && true the answer is true. What it does is it checks to see if  both sides of the operator are true or not.
//if you had true && false, the result is false. As well as false && false is always false. 
//|| is Or. It is true if one or the other side of the operator is tru
//so true || true is true.
//true || false is true
//false ||  true is true
//false || false is false. 

//Special case: the first 2 permutations are always 1.
//Precondition: numberOfPermutations > 0
function calculateFibonacciValue(numberOfPermutations)
{
    if (numberOfPermutations == 1 || numberOfPermutations == 2)
        return 1;

    var lastNumber = 1;
    var lastLastNumber = 1;
    var result;

    for (let count = 3; count <= numberOfPermutations; count++) {
        result = lastNumber + lastLastNumber;
        lastLastNumber = lastNumber;
        lastNumber = result;
    }

    return result;
}

console.log(calculateFibonacciValue(2));
console.log(calculateFibonacciValue(3));
console.log(calculateFibonacciValue(6));
console.log(calculateFibonacciValue(20));
console.log(calculateFibonacciValue(200));