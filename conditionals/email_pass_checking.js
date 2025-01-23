
let email="user@example.com";
console.log("\nenter your email: ", email);
let password=123456;
console.log("enter your password: ", password);

if(email==="user@example.com" && password=="123456"){
    console.log("Welcome User");
}else if(email!=="user@example.com"){
    console.log("Invalid Email");
}else if(email==="user@example.com" && password !="123456"){
    console.log("Invalid Password");
}