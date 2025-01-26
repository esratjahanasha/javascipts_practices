
// 4. Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

const a="[1,4,5,6,3]";
const array2=[];
const a1=23;
let array1=[1,4,5,6,3];
let array3=["asha",'af'];
let temp;

temp=Array.isArray(a);
if(temp){
    console.log(temp,"\n a is an array: ",a);
}else{
    console.log("\n",temp,"a is not an array: ",a);
}
temp=Array.isArray(array2);
if(temp){
    console.log(temp,"array2 is an array: ", array2);
}else{
    console.log(temp,"aarray2 is not an array: ",array2);
}
temp=Array.isArray(a1);
if(temp){
    console.log(temp,"a1 is an array: ", a1);
}else{
    console.log(temp,"a1 is not an array: ",a1);
}
temp=Array.isArray(array1);
if(temp){
    console.log(temp,"array1 is an array: ",array1);
}else{
    console.log(temp,"array1 is not an array: ",array1);
}
temp=Array.isArray(array3);
if(temp){
    console.log(temp,"array3 is an array: ",array3);
}else{
    console.log(temp,"array3 is not an array: ",array3);
}