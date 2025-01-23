console.log("\nplease enter your password: ");
// password= "admin@123"
let password= "admin@123";
console.log("\nyour password is: ",password);


if(password !== ""){
     if(password === "admin@123")
    console.log("Login Successful");
     else {
        console.log("Incorrect Password");
     }
}
else{
    console.log("Password cannot be empty");
}