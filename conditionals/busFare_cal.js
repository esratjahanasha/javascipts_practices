/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age= 25;
let student =false;
let price= 800;
let discounted_price;

 discounted_price=(age<10) ? "free" : student==true ? price-((price*50)/ 100) :(age>=60) ? price-((price*15)/ 100) : "you have to pay: 800tk";
 console.log(discounted_price);