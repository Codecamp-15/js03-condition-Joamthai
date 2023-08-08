let user = prompt("Enter Username");
let pass;

if(+user == 0) {
    alert("username is required");
} else if(user != "admin" && user != "john") {
    alert("invalid username");
} else if(user = "admin") {
    pass = prompt("Enter Password");
    if(+pass == 0) {
        alert("password is required");
    } else if(pass != "123456") {
        alert("invalid password");
    } else {
        alert(`Hello, ${user}`);
    }
} else {
    (user = "john") 
    pass = prompt("Enter Password");
    if(+pass == 0) {
        alert("password is required");
    } else if(pass != "qwerty") {
        alert("invalid password");
    } else {
        alert(`Hello, ${user}`);
    }
}