let user = prompt("Enter Username")
let pass ;
if (+user == 0) {
    alert("Welcome Guest");
} else if (user != "codecamp") {
    alert(`Welcome ${user}`);
} else {
    console.log("I'm Here");
    pass = prompt("Enter Password")
    if (pass != "123456"){
        alert("Wrong Password");
    } else {
        alert(`Welcome ${user}`);
    }
};