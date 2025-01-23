console.log("\ne-commerce discount calculation: ");

let payAmt=100;

if(payAmt>500){
   let newPayAmt= payAmt-((payAmt*20)/100);
 console.log("\nyou got 20% discount.so you have to pay= ", newPayAmt);
}else if(payAmt>=200 && payAmt<=500){
    let newPayAmt= payAmt-((payAmt*10)/100);
    console.log("you got 10% discount.so you have to pay= ", newPayAmt);
}
else{
    console.log("sorry! you got no discount. so you have to pay= ", payAmt); 
}