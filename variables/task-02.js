// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// The first line of the input is the marks of the five subjects mentioned above, respectively.

var math=75.25, bio=65, chem=80, phy=35.45,bangla=99.50;
console.log("\n");
console.log("the student received the marks for math, biology, chemistry, Physichs, and Bangla respectively are: ", math+", "+bio+", "+chem+", "+phy+", "+bangla);

var totalMarks=(math+bio+chem+phy+bangla);
console.log("The total marks he has obtained: ",totalMarks.toFixed(2));
var averageMark=totalMarks/5;
console.log( "the average mark he got:", averageMark.toFixed(2));
