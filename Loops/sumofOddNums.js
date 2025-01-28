/***
Subtask-1:
Display sum of all the odd numbers from 81 to 131.
 */
/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
 */

//subtask-1

let n1=81,n2=131,sumofOdd=0;
while(n1<=n2){
    if(n1%2!=0){
        sumofOdd=sumofOdd+n1;
    }
        n1++;
}
console.log("sum of all odd numbers is: ",sumofOdd);

//subtask-2
let num1=206;
const num2=311;
let sumofEven=0;

while(num1<=num2){
    if(num1%2 == 0){
        sumofEven=sumofEven+num1;
    }
    num1++;
}
console.log("sum of all even numbers: ",sumofEven);