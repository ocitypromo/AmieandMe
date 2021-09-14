


function simpleRecursion(number, stackLevel = 0) {
    console.log("simpleRecursion called. Stack Level: " + stackLevel + " Number: " + number);

    if (number >= 25) {
        console.log("Stack Level: " + stackLevel + " Number is >= 25: " + number);
        return;
    }

    console.log("Before recursive call - Stack Level: " + stackLevel + " Number: " + number);
    var newN = number + 10;
    number = "Whales!";
    simpleRecursion(newN, stackLevel + 1);

    console.log("After recursive call - Stack Level: " + stackLevel + " Number: " + number);
}

simpleRecursion(0);

/*
call stack 0
simpleRecursion runs with number = 0
number is < 25, so the if statement doesn't run
it then calls itself, passing in the parameter 5
----
call stack 1
simpleCRecursion runs with number = 10
number is < 25, so the if statement doesn't run
it then calls itself passing in the parameter 20
---
call stack 2
simpleCRecursion runs with number = 20
number is < 25, so the if statement doesn't run
it then calls itself passing in the parameter 30
---
call stack 3
simpleRecursion runs with number = 30
number is >= 25, so the if statement runs
it returns true
---
call stack 2
the call to itself in call stack 2 becomes true
returns true
---
call stack 1
the call to itself in call stack 1 becomes true
returns true
---
call stack 0
the call to itself in call stack 0 becomes true
returns true
finally exits the first function call
*/