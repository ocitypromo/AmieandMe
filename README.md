# AmieandMe

AmieandME is a repo of exercises from our Skill building meetings twice a week.

Amie is a Javascript whiz and I plan on generating this readme file as more of a diary of our sessions.
This is the confessional room for this reality show where I will post up her great analogies, super helpful
explanations, and maybe even some stories of triumphant and messy-triumphant learning moments.

Hold on to your socks, my techie friends, this is the next chapter of my learning adventures!!

First, Let me start by Introducing Amie to you from my perspective- She was new to my place of employment around
the same time as me, and I was intrigued by her intro to the team, where she talked about her programming background
and displayed her skills on her spotlight presentation. I knew then I admired her skills and personality but would find
out just how awesome she is when she approached me to ask if I would like help learning JavaScript and agreed to teach
me 2x a week! I was intimidated and excited and knew I was about to open a new chapter in my book of learning adventures.

Fast forward to a couple sessions and I realized this would be a great thing to document and add to my GH bag and share
with the hello world.

I got through a couple sessions before I started this, so we will start with today's entry-

8-6-21
This session I got to learn that there are different ways to use a for loop and that there are special cases and preconditions
that may need to be considered.

Today what I feel like the most important thing I noticed is I lack a good knowledge and understanding of syntax so I will study that and the and/or operator in a boolean object. Also I will study up on the Order of Operations and operator precedence.
We worked on programming the Fibonacci sequence and went over Homework2 assignment

8-9-21 What does a computer program do? It takes in a set of data, does something with that data, and then returns new data
We went over recursion and how the computer breaks down a function to its operations and methods. We went over the recursion process of how a call stack starts and then unwinds.

8-20-21 What does a computer program do? It takes in data, does something with that data, and then returns new data
Holy crap, yall!! I completed my first homework assignment BEFORE the meeting to go over it again. I feel super elated and So blessed to have the best JS teacher!!

8-30-21 What does a computer program do? It takes in data, it does something with that data, and it returns new data
We will be doin joint sessions with G and Sabrina now too so I will add notes for those here as well. So far we started getting into validating a data set.
Today we really examined helper functions like validation. These functions perform part of the computation of another function and are easy to reuse.

Modulus (%) is an operation that returns the remainder ofa division of two integers.

Read more:
Static Function vs Class Function
Pseudo Code examples
https://jarednielsen.com/teach-adults-code/
https://softwareengineering.stackexchange.com/questions/72761/how-do-you-identify-edge-cases-on-algorithms
The identity property (x1)

8-31-21 What does a computer program do? A program takes data, does something with it, and returns data

To write out the steps your program needs to take and then turn those steps into pseudocode begin with the question "how would I do it by hand?"
To create code, write the steps one by one, then create comments out of those steps, then turn each step into a line of code

9-7-21 What does a computer program do? It takes data, does something with it, and returns data
How 2 frames to create code from- first, what steps would you take to do this by hand in a real world scenario? Second take those steps, create comments and turn those comments into code

types of loops-
for loop tracks index and variables
while loop tracks loop conditions
do while loop runs 1 or more times but not less
recursive loop calls itself, used for a repetitive unit of work

Today Amie sent me a very helpful outline to start creating code:

1. Write down how you would do it as a human in fine grain detail a 5 year old could understand. Don't worry too much about flow control terms like for/while/if. Just be very deliberate and don't gloss anything over.
2. Try to re-express step 1 in terms like for/while/if, but still in human form. This is about flow control and putting it in a manner that would flow logically, like on a computer.
3. Use step 2 as comments to start writing some loose pseudocode that is closer to computer form but still human readable. This step will help you outline any missing functions/mathematics you may need. You will want to start using mathematical expressions here.
4. Strict pseudocode. This looks like a generic programming language. It may assume you have certain language features available like the array Slice method in JS if you absolutely know that is your language. Otherwise it may be more generic.
5. Put in code. This transforms Step 4 into your target language syntax. You will use your Step 2 or 3 as comments.

9-20-21
We are looking at logic and creating truth tables. here are a few of the tabes

    Operator:	NOT		Operator:	OR			Operator:	XOR			Operator:	AND

    A	NOT A		A	B	A OR B		A	B	A XOR B		A	B	A AND B	NOT (A AND B)
    TRUE	FALSE		TRUE	TRUE	TRUE		TRUE	TRUE	FALSE		TRUE	TRUE	TRUE	FALSE
    FALSE	TRUE		TRUE	FALSE	TRUE		TRUE	FALSE	TRUE		TRUE	FALSE	FALSE	TRUE
    			FALSE	TRUE	TRUE		FALSE	TRUE	TRUE		FALSE	TRUE	FALSE	TRUE
    			FALSE	FALSE	FALSE		FALSE	FALSE	FALSE		FALSE	FALSE	FALSE	TRUE



    If Car Make is a Honda and the Year is > 2012
    Negate That Statement
    If Car Make is Not a Honda Or the Year is <= 2012						NOT (A AND B)	NOT A OR NOT B	NOT A AND NOT B		A	B	NOT A OR NOT B
    						FALSE	FALSE	FALSE		TRUE	TRUE	FALSE
    						TRUE	TRUE	FALSE		TRUE	FALSE	TRUE
    						TRUE	TRUE	FALSE		FALSE	TRUE	TRUE
    if Lights are on or windows are rolled down then we fix that						TRUE	TRUE	TRUE		FALSE	FALSE	TRUE
    Negate that statement
    If the lights are off and the windows are rolled up then we don't need to fix that										A	B	NOT A AND NOT B
    										TRUE	TRUE	FALSE
    										TRUE	FALSE	FALSE
    										FALSE	TRUE	FALSE
    										FALSE	FALSE	TRUE


    -3	-2	-1	0	1	2	3

n > 1 FALSE FALSE FALSE FALSE FALSE TRUE TRUE
n >= 1 FALSE FALSE FALSE FALSE TRUE TRUE TRUE
n < 1 TRUE TRUE TRUE TRUE FALSE FALSE FALSE
n <= 1 TRUE TRUE TRUE TRUE TRUE FALSE FALSE
n <> 1 the same as n != 1
n < 1 or n > 1 TRUE TRUE TRUE TRUE FALSE TRUE TRUE
n != 1 TRUE TRUE TRUE TRUE FALSE TRUE TRUE
n = 1 FALSE FALSE FALSE FALSE TRUE FALSE FALSE

Definition of NAND aka Not AND Derive NOT from NAND Derive AND from NAND
NAND
A B A AND B NOT (A AND B) A A NAND TRUE A B A NAND B (A NAND B) NAND TRUE A AND B
TRUE TRUE TRUE FALSE TRUE FALSE TRUE TRUE FALSE TRUE TRUE
TRUE FALSE FALSE TRUE FALSE TRUE TRUE FALSE TRUE FALSE FALSE
FALSE TRUE FALSE TRUE FALSE TRUE TRUE FALSE FALSE
FALSE FALSE FALSE TRUE A A NAND A FALSE FALSE TRUE FALSE FALSE
TRUE FALSE
FALSE TRUE
Derive OR from NAND
Same as A OR B
A B A OR B A NAND A B NAND B (A NAND A) NAND (B NAND B)
TRUE TRUE TRUE FALSE FALSE TRUE
TRUE FALSE TRUE FALSE TRUE TRUE
FALSE TRUE TRUE TRUE FALSE TRUE
FALSE FALSE FALSE TRUE TRUE FALSE
Derive NOR from NAND = (A NAND A) NAND (B NAND B) NAND (A NAND A) NAND (B NAND B)
You can see this is true because A NAND A is the same as NOT A. So we're using NAND to get a NOT OR
A B A NOR B (A NAND A) NAND (B NAND B) (A NAND A) NAND (B NAND B) NAND (A NAND A) NAND (B NAND B) (A OR B) NAND (A OR B)
TRUE TRUE FALSE TRUE FALSE FALSE
TRUE FALSE FALSE TRUE FALSE FALSE
FALSE TRUE FALSE TRUE FALSE FALSE
FALSE FALSE TRUE FALSE TRUE TRUE
This is the same as (A OR B) NAND (A OR B)
If you think of A OR B as Q, and we know that Q NAND Q = NOT Q, then logically NOR is Q NAND Q

SHIFT Operators A B A & B A | B
A A << 1 The same as saying A \* 2 1001 1000 1000 1001
<< Left Shift 100 1000
101 1010 Base 10 Base 2
1 Show Title 0001

> > Right Shift 100 10 The same as saying A / 2 2 Show Window Controls 0010

    	101	10						4	Show Border			0100
    								8	Show Header			1000
    								10	Settings			1010
    	A	A << 3	The same as A * 2^3					15	Settings for All			1111
    	101	101000						0001	Show Title, Don't Show Rest
    								0011	Show Title and Window Controls, but not the rest.
    								1111	Show Everything
    A	B	A & B
    1010	1000	1000						if (Settings & Show Title == Show Title) Then Show the Title
    1010	0100	0000						1010 & 0001 = 0000
    1010	0001	0000
    1011	0001	0001						if (Settings & Show Window Controls == Show Window Controls)
    1011	0010	0010						1010 & 0010 = 0010
    1001	0010	0000						This is true, so we show window controls
    1010	1111	1010
    1010	0111	0010						if (Settings & Show Border == Show Border)
    								1010 & 0100 = 0000		FALSE
    A	B	A | B
    1010	1000	1010						if (Settings & Show Header == Show Header)
    								1010 & 1000 = 1000		TRUE
