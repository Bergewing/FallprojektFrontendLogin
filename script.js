//skapa en event listener för registreringsknappen
const registerButton = document.getElementById('register')

const RegisterPage = () => {
    console.log('Button was clicked')
    //window.location.replace("http://127.0.0.1:5500/Fallprojekt/register.html");
}

registerButton.addEventListener('click', RegisterPage)

const signInButton = document.getElementById('signIn')


const minDiv = document.getElementById('Felmeddelande')
const felmeddelande = document.createElement("p")
const text = document.createTextNode('Username or Password is missing')
felmeddelande.appendChild(text)

//skapa en eventlistener för logga in knappen
const SignIn = (e) => {
    //PreventDefault här??
    e.stopPropagation() // Ska denna verkligen vara här och om så vad faan gör den??

    console.log('Button2 was clicked')
    const signInForm = {};
    signInForm.Username = document.getElementById("Username").value
    signInForm.Password = document.getElementById("Password").value
    console.log(signInForm);
    const jsonStringObj = JSON.stringify(signInForm);

    //på den skapa en fetch på den för att skicka datan vidare
    if(signInForm.Username === "" || signInForm.Password === "" ){
        //Om json inte är komplett skicka ut felmeddelande gör texten röd??
        minDiv.appendChild(felmeddelande)
    }
    else {
        //Om json är komplett gör min fetch här   Få denna att funka, jag vill ha tillbaka en body med true eller false innan jag fortsätter med nästa del.
        fetch('https://localhost:7073/api/User/user', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: jsonStringObj
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });


        //I min fetch ny if sats som skickar en append child som rad 42 med meddelande "Fel lösen eller username" 
        //eller redirect inloggad sida

    }
}

signInButton.addEventListener('click', SignIn)


