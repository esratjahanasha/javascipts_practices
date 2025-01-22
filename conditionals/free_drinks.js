// Free Drinks
//     - Burger more than 500tk: free Coke
//     - Else Coke: 30tk

console.log("\n if you buy a burger for more than 500tk, you will get a free coke. \n otherwise you have to pay 30 tk for coke.");

let burgerPrice= 600;
let cokeprice=30;
let payamount=burgerPrice;

console.log("\nenter your price for a burger: ", payamount)
if(burgerPrice>500){
    console.log("Also you will get a free coke.");
}
else{
    payamount=burgerPrice+cokeprice;
    console.log("you have to pay 30 tk extra for a coke,so your total bill is: ", payamount);
}