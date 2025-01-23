console.log("\ne-commerce discount calculation: ");

let payAmt=400;
let newPayAmt;
if(payAmt>500){
   newPayAmt= payAmt-((payAmt*20)/100);
   console.log("you got 20% discount.so you have to pay= ", newPayAmt);
}else if(payAmt>=200 && payAmt<=500){
    newPayAmt= payAmt-((payAmt*10)/100);
    console.log("you got 10% discount.so you have to pay= ", newPayAmt);
}
else{
    console.log("sorry! you got no discount. so you have to pay= ", payAmt); 
}
