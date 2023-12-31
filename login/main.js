const singup_link = document.querySelector(".signup-link");
<<<<<<< HEAD
const login_link = document.querySelector(".login-link");
const email = document.getElementById("emailContainer");
const submitLOGIN = document.getElementById("submitL");
const submitSIGNUP = document.getElementById("submitS");
const tekstOnLOGIN = document.querySelector("#dont_have_account");
const tekstOnSIGNUP = document.querySelector("#have_account");
const usernameSIGNUP = document.getElementById("usernameS");
const passwordSIGNUP = document.getElementById("passwordS");
const usernameLOGIN = document.getElementById("usernameL");
const passwordLOGIN = document.getElementById("passwordL");
const email_tekst = document.getElementById("email");
const city_dropdown = document.getElementById("gradovi");
=======
const email = document.getElementById("emailContainer");
const submit = document.getElementById("submit");
const tekst = document.querySelector("#dont_have_account");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email_tekst = document.getElementById("email");
>>>>>>> 7990224f51bc0278baf2417e93be340783e78eb1

const api = 'https://rarog-django.vercel.app/api'

document.querySelector("#login_forma")
    .addEventListener("submit", (event) => {
        event.preventDefault()
<<<<<<< HEAD
        fetchLogin();
});

document.querySelector("#signup_forma")
    .addEventListener("submit", (event) => {
        event.preventDefault()
        fetchSignUp();
});

window.addEventListener("DOMContentLoaded",function(){
    fetchCities();
=======
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
>>>>>>> 7990224f51bc0278baf2417e93be340783e78eb1
});

async function fetchSignUp() {
    try {
        const response = await fetch(api + '/signup', 
        {
            method: 'POST',
            body: JSON.stringify({
                email: email_tekst.value,
<<<<<<< HEAD
                username: usernameSIGNUP.value,
                password: passwordSIGNUP.value
            })
        })
        if(response.ok) {
            const responseParsed = await response.json()
=======
                username: username.value,
                password: password.value
            })
        })
        if(response.ok) {
            const responseParsed = response.json()
>>>>>>> 7990224f51bc0278baf2417e93be340783e78eb1
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
<<<<<<< HEAD
                username: usernameLOGIN.value,
                password: passwordLOGIN.value
            })
        })
        if(response.ok) {
            const responseParsed = await response.json()
=======
                username: username.value,
                password: password.value
            })
        })
        if(response.ok) {
            const responseParsed = response.json()
>>>>>>> 7990224f51bc0278baf2417e93be340783e78eb1
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
<<<<<<< HEAD
}

async function fetchCities() {
    try {
      const response = await fetch(api + '/cities')
      if(response.ok) {
          const cities = await response.json()
          cities.forEach((city) => {
            const newOption = document.createElement('option')
            newOption.innerHTML = city.name
            newOption.value = city.cityId
            city_dropdown.appendChild(newOption);
          })
      } else {
          //TODO: Add some header on the page to tell the user that there has been an error
          console.log('Error fatching data')
      }
    } catch(e) {
          //TODO: Add some header on the page to tell the user that there has been an error
        console.log(e)
    }
  }
=======
}
>>>>>>> 7990224f51bc0278baf2417e93be340783e78eb1
