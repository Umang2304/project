const form = document.querySelector("form");
const user = document.getElementById("user");
const psw = document.getElementById("psw");

form.addEventListener("submit", function(){
 
    if(user.value == ""){
        alert("please eter the username")
    }
    else if(psw.value == ""){
        alert("please enter the password")
    }
    else{
        alert("Login Successfully")
        form.submit();
    }
})

// const form = document.querySelector("form");
// const user = document.getElementById("user");
// const psw = document.getElementById("psw");

// form.addEventListener("submit", function (event) {
//     // Prevent default form submission behavior
//     event.preventDefault();

//     // Check for empty fields
//     if (user.value.trim() === "") {
//         alert("Please enter the username");
//     } else if (psw.value.trim() === "") {
//         alert("Please enter the password");
//     } else {
//         alert("Login Successfully");
//         form.submit(); // Proceed with form submission if no issues
//     }
// });