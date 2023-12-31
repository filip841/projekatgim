const api = 'https://rarog-django.vercel.app/api'

const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const form = document.getElementById('login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetchLogin()
})

async function fetchLogin() {
    try {
        const response = await fetch(api + '/login', 
        {
            method: 'POST',
            body: JSON.stringify({
                username: usernameInput.value,
                password: passwordInput.value
            })
        })
        if(response.ok) {
            const responseParsed = await response.json()
            const { id: userId } = responseParsed
            // Add the userId to the cookies so you can access it from the other pages
            document.cookie = `userId=${userId}; max-age=${12 * 60 * 60};`
            window.location.href = "./home"
        } else {
            //TODO: Add some header on the page to tell the user taht password or username are invalid
            console.log('Wrong username or password')
        }
    } catch(e) {
        console.log(e)
    }
}

