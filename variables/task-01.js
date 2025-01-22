// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
//The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

var amount=1000;
console.log("\n");
console.log("i gave the shopkeeper: ", amount+ "tk");

priceofOranges=200;
priceofApples=400;
var totalCost = priceofOranges+priceofApples;
console.log("the total cost of 1kg of Oranges and apple is: ", totalCost+ "tk \n");

var returnedMoney= amount - totalCost;
console.log("the shopkeeper will return me: ", returnedMoney+"tk \n" );
