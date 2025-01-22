/*

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

console.log("\nwelcome to the BMI calculator: ");
let weight=100;
let height=1.524;
let bmi;
console.log("\nyour weight is: ",weight,"kg");
console.log("your height is: ",height,"m");
bmi=weight / (height**2);
bmi=bmi.toFixed(2);
if(bmi<18.5){
    console.log("as your BMI is: ",bmi,". you are UNDERWEIGHT" );
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log("as your BMI is: ",bmi,". you are NORMAL" );
}
else if(bmi>=25 && bmi<=29.9){
    console.log("as your BMI is: ",bmi,".you are OVERWEIGHT");
}
else{
    console.log("you are OBSE")
}