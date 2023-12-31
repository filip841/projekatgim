const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const emailInput = document.getElementById('email')
const cityInput = document.getElementById('city')
const form = document.getElementById('signup-form')

const api = 'https://rarog-django.vercel.app/api'

async function fetchCities() {
  try {
    const response = await fetch(api + '/cities/')
    if(response.ok) {
        const cities = await response.json()
        cities.forEach((city) => {
          const newOption = document.createElement('option')
          newOption.innerHTML = city.name
          newOption.value = city.cityId
          cityInput.appendChild(newOption)
        })
    } else {
        //TODO: Add some header on the page to tell the user that there has been an error
        console.log('Error while fetching data')
    }
  } catch(e) {
        //TODO: Add some header on the page to tell the user that there has been an error
      console.log(e)
  }
}

async function fetchSignUp() {
  try {
    const response = await fetch(api + '/signup/', {
        method: 'POST',
        body: JSON.stringify({
            email: emailInput.value,
            username: usernameInput.value,
            password: passwordInput.value,
            city: cityInput.value
        })
    })
    if(response.ok) {
        const responseParsed = await response.json()
        const { id: userId } = responseParsed
        // Add the userId to the cookies so you can access it from the other pages
        document.cookie = `userId=${userId}; max-age=${12 * 60 * 60};`
        window.location.href = "./home"
    } else {
        //TODO: Add some header on the page to tell the user there has been an error
        console.log('There has been an error')
    }
  } catch(e) {
      console.log(e)
  }
}

fetchCities()

form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetchSignUp()
})
