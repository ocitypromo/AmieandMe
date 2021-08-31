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