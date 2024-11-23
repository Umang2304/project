const form = document.querySelector("form");
const password = document.getElementById("psw");
const confirmPassword = document.getElementById("confirmpsw");
form.addEventListener("submit", function(){
    if(password.value != confirmPassword.value){
        alert("password is not matching")
    }
    else{
        form.submit();
    }
})
