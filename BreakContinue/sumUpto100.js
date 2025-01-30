// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

//eta ask korbo pore
let sum = 0;
let number = 1;

while (true) {
  sum += number; // Add the current number to the sum
  if (sum >= 100) {
    break; // Stop the loop if the sum reaches exactly 100
  }
  number++; // Move to the next number
}

console.log(`Sum: ${sum}, Last number added: ${number}`);