const singup_link = document.querySelector(".signup-link");
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

const api = 'https://rarog-django.vercel.app/api'

document.querySelector("#login_forma")
    .addEventListener("submit", (event) => {
        event.preventDefault()
        fetchLogin();
});

document.querySelector("#signup_forma")
    .addEventListener("submit", (event) => {
        event.preventDefault()
        fetchSignUp();
});

window.addEventListener("DOMContentLoaded",function(){
    fetchCities();
});

async function fetchSignUp() {
    try {
        const response = await fetch(api + '/signup', 
        {
            method: 'POST',
            body: JSON.stringify({
                email: email_tekst.value,
                username: usernameSIGNUP.value,
                password: passwordSIGNUP.value
            })
        })
        if(response.ok) {
            const responseParsed = await response.json()
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
                username: usernameLOGIN.value,
                password: passwordLOGIN.value
            })
        })
        if(response.ok) {
            const responseParsed = await response.json()
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
