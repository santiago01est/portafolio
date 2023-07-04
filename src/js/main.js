// Import our custom CSS
//import '../styles/main.css'

// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'

/* Lottie*/
function handleSubmit(event) {
    event.preventDefault();
    console.log("Hola mundo");
}
const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);
