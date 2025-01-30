// Write a loop 1 to 200. Use break to exit the loop once you find 100.
const numbers=[];
for(let i=1; i<=200; i++){
    if(i >100){
        break; 
    }
    numbers.push(i); 
}
console.log(numbers);