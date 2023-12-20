document.querySelector("#submit").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href = "glavna_stranica.html";
});
const singup_link = document.querySelector(".signup-link");
const email = document.getElementById("emailContainer");
const submit = document.getElementById("submit");
const tekst = document.querySelector("#dont_have_account");
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