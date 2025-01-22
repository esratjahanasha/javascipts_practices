/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

console.log("\nLet’s hang out based on the required score for my friend and me: ")
let myScore=80;
let frndScore=86;
console.log("my achived score is: ",myScore);
console.log("my friend's achived score is: ",frndScore);

if(myScore>=80 && myScore<=100){
    if(frndScore>=80){
        console.log("lets go for a lunch");
    }
    else if(frndScore>=60 && frndScore<80){
        console.log("good luck next time");
    }
    else if(frndScore>=40 && frndScore<60){
        console.log("keeping my friend's message unseen");
    }
    else{
        console.log("blocked her");
    }
}
else{
    console.log(" went to home and slept and act sad");
}