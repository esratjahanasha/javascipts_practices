/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */

//even num using while loop

let num = 61,
  count = 0;
const evenNumbers = [];
while (num <= 100) {
  if (num % 2 == 0) {
    evenNumbers.push(num);
    count++;
  }
  num++;
}
console.log(count);
console.log(evenNumbers);

//odd num using while loop
let n1 = 78,
  n2 = 98,
  i = 0;
console.log("the even numbers are= ");
while (n1 <= n2) {
  if (n1 % 2 != 0) {
    console.log(n1);
    i++;
  }
  n1++;
}
