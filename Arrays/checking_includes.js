// . Checking Array Membership with ‘includes’
// Instructions:
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

const books=["ansi c","horror books","fiction books","harry porter"];
const isinclude=books.includes("javascript book");
console.log("\n", isinclude);
if(isinclude){
    console.log("the javascript book is present in the array", books);
}
else{
    console.log("the javascript book is not present in the array", books);
}