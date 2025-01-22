/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
console.log("\nwelcome to the Grade calculator: ");
// let a_num=90, b_num=85, c_num=43, d_num=79,e_num=61;
let a_num= b_num= c_num= d_num= e_num= -1;
console.log("Grading system is= A: 90-100\nB: 80-89\nC: 70-79\nD: 60-69\nF: 0-59");
console.log("\nHere is your required grade based on your number: ");
if(a_num>=90 && a_num<=100){
    console.log("As your score is: ",a_num,"your grade is: 'A'");
}
else if(b_num>=80 && b_num<=89){
    console.log("As your score is: ",b_num,"your grade is: 'B'");
}
else if(d_num>=70 && d_num<=79){
    console.log("As your score is: ",d_num,"your grade is: 'C'");
}
else if(e_num>=60 && e_num<=69){
    console.log("As your score is: ",e_num,"your grade is: 'D'");
}
else{
    if(c_num>=0 && c_num<=59)
    console.log("As your score is: ",c_num+"your grade is: 'F'");
 else
    console.log("As your score is: ",c_num,"your grade is not valid");
}

