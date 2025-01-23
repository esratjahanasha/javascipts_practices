console.log("\nwelcome to the Fizzbuzz game: ");
let num=25;
console.log("enter you number from 1 to 100: ",num);

if(num%3 ==0 && num%5 ==0){ 
console.log("FizzBuzz");
}else if(num%3 ==0){
    console.log("Fizz");
}else if(num%5 ==0){
    console.log("Buzz");
}else{
    console.log(num);
}