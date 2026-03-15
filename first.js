function orderNow(){

let phone = "919548490154";

let message = "Hello Sandeep, I want to order a website";

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url);

}
function sendOrder(){

let name = document.querySelector('input[type="text"]').value;
let email = document.querySelector('input[type="email"]').value;
let details = document.querySelector('textarea').value;

let phone = "91XXXXXXXXXX";

let message = "New Website Order:%0AName: " + name + "%0AEmail: " + email + "%0ADetails: " + details;

let url = "https://wa.me/" + phone + "?text=" + message;

window.open(url);

}
