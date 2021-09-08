//Write a function that takes a positive integer such that n: 0 < n < 1e6. (1e6 is the same as 1 x 10 to the 6th power)
//The function will remove the last digit of the integer n until you're left with a number that is a multiple of three.
//(Remember how integers work. They don't do fractions. So whole numbers only.)
//Return n if the input is already a multiple of three.
//Return null if no such number exists.

//36 / 3 -> is a whole number, so f(36) -> 36 
// f(1244) -> f(124) -> f(12) -> 12
// f(25) -> f(2) -> null
//Basically you're lopping off the last number until it's a multiple of 3.
//Test it with the following numbers: 1, 25, 36, 1244, 952406. The results should be null, null, 36, 12, 9.

//Hint: Lots of ways to do this. Sometimes you need to look at data from a different perspective. Or you just need to brush up on your basic math. You have choices.
/*
example of steps
checkIfInteger:
to validate if a number is an integer
look at each number
check if number is integer
if integer continue to next number
if not integer stop because not all numbers are integers

check if input isInteger
    if isInteger is false, return false
    if isInteger is true, continue on
for every number X in input
    if X is integer, continue to next
    if X is !integer, return false
continue to next X
return true

check if input isInteger
    if isInteger is false, return false
for every number X in input
    if X is !integer, return false
continue to next X
return true

------

validate if a number isInteger and between 0- 1e6
    if isInteger is false return false and exit


check if n is multiple of three
    if not, remove last digit of n and check again
    until no numbers are left or value is multiple of 3

if true return n    

----

validate if n isInteger and between 0 < n < 1e6
    if false return ??
    
check if n is multiple of 3 (n % 3 = 0)
    if false remove last number







*/
//console.log(Number.isInteger(7));

function isMultOf3() {


}

var testNumbers = [1, 25, 36, 1244, 952406];
var testNumbers1 = [1, "no", 36, 1244, 952406];




//Questions to ask in next meeting:

//getting stuck at verification of integer- console logging true (testNumbers1) when I am sure it is false- is this because my isInteger isnt pointing to the correct place?
//what happens in development if you are testing and it passes but you know the program should fail?



