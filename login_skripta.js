const singup_link = document.querySelector(".signup-link");
const email = document.getElementById("emailContainer");
const submit = document.getElementById("submit");
const tekst = document.querySelector("#dont_have_account");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email_tekst = document.getElementById("email");
document.querySelector("#submit").addEventListener("click",function(event){
        if (username.value !== "" && password.value !== "") {
            if (email.style.display !== "block") {
                window.location.href = "glavna_stranica.html";
            } else if (email_tekst.value !== "") {
                window.location.href = "glavna_stranica.html";
            }
        }
});
singup_link.addEventListener("click",function(event){
    event.preventDefault();
    if(email.style.display==="none" || email.style.display === ''){
        email.style.display = 'block';
        submit.textContent = "SIGN UP";
        tekst.textContent = "Already have an account?";
        singup_link.textContent = "Log in";
    }else{
        email.style.display = "none";
        submit.textContent = "LOG IN";
        tekst.textContent = "Don't have an account?";
        singup_link.textContent = "Sign up";
    }
});