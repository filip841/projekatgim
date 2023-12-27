const singup_link = document.querySelector(".signup-link");
const email = document.getElementById("emailContainer");
const submit = document.getElementById("submit");
const tekst = document.querySelector("#dont_have_account");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email_tekst = document.getElementById("email");

const api = 'https://rarog-django.vercel.app/api'

document.querySelector("#login_forma")
    .addEventListener("submit", (event) => {
        event.preventDefault()
        if (username.value !== "" && password.value !== "") {
            if (email.style.display !== "block") {
                fetchLogin()
            } else if (email_tekst.value !== "") {
                fetchSignUp()
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

async function fetchSignUp() {
    try {
        const response = await fetch(api + '/signup', 
        {
            method: 'POST',
            body: JSON.stringify({
                email: email_tekst.value,
                username: username.value,
                password: password.value
            })
        })
        if(response.ok) {
            const responseParsed = response.json()
            // TODO: I have no idea what does our backend return in this case, but it should be parsed and stored in a cookie or local storage
            window.location.href = "./home/"
        } else {
            //TODO: Add some header on the page to tell the user there has been an error
            console.log('There has been an error')
        }
    } catch(e) {
        console.log(e)
    }
}

async function fetchLogin() {
    try {
        const response = await fetch(api + '/login', 
        {
            method: 'POST',
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        })
        if(response.ok) {
            const responseParsed = response.json()
            const { id: userId } = responseParsed
            // Add the userId to the cookies so you can access it from the other pages
            document.cookie = `userId=${userId}; max-age=${12 * 60 * 60};`
            window.location.href = "./home/"
        } else {
            //TODO: Add some header on the page to tell the user taht password or username are invalid
            console.log('Wrong username or password')
        }
    } catch(e) {
        console.log(e)
    }
}