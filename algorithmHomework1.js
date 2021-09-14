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
alg-
check if 1244(n) isInteger = true
and between 0 < n < 1e6 = true
 is 1244 a multiple of 3 = false
 if false newN = (Math.floor(n / 10)
 newN = 124
 n = newN
 n=124


validate if n isInteger and between 0 < n < 1e6
    if false return null
    
check if n is multiple of 3 (n % 3 = 0)
    if false 
        newN = (Math.floor(n / 10))
        return isMultOf3 with newN;
    if true return n



     
                    
----
Now it works, so the next step is to clean it up a bit. 
You will need to pick which side (true or false) you want your if statements to handle.
If you use the true side, your if statements need to be in the affirmative
if you use the false side, your if statements need to be the opposite of the affirmative

What we're saying with the false side is that if (something is not true) then do this
For the affirmative side we would say if (something is true) then do this

You will have to pick which side you want to use for the n is multiple of 3 check

validate if n isInteger and between 0 < n < 1e6
    if false return null

check if n is multiple of 3 (n % 3 = 0)
    if false
        return isMultOf3(Math.floor(n / 10)) to make recursive call and remove last digit. 
    if true return n    






---

N = 1
n > 0 is true
!(n > 0) is false
n <= 0 is false
!(n <= 0) is true
N = 0
n > 0 is false
!(n > 0) is true
n <= 0 is true
!(n <= 0) is false


negating if n isInteger and n > 0 and n < 1e6

!isInteger or n <= 0 or n >= 1e6

validate if a car is red
    if not red, turn driver away

!(a and b)
!a or !b

!(a or b)
!a and !b

!(n > 0)
n <= 0

<- -3 -2 -1 0 1 2 3 ->

!(n < 0) 
n >= 0

!(0 < 0) is true
0 >= 0 is true
*/
console.log(Number.isInteger(1244));

function isMultOf3(number) {
    if (something) {

    }
    
    var n = [];

    if (n % 3 = 0)


}

var testNumbers = [1, 25, 36, 1244, 952406];
var testNumbers1 = [1, "no", 36, 1244, 952406];




//Questions to ask in next meeting:

//getting stuck at verification of integer- console logging true (testNumbers1) when I am sure it is false- is this because my isInteger isnt pointing to the correct place?
//what happens in development if you are testing and it passes but you know the program should fail?



