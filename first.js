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

let phone = "919548490154";

let message = "Hello Sandeep,%0AI want to order a website.%0AName: " + name + "%0AEmail: " + email + "%0ADetails: " + details;

let url = "https://wa.me/" + phone + "?text=" + message;

window.open(url);

}
function sendMail(){

let name = document.querySelector('input[type="text"]').value;
let email = document.querySelector('input[type="email"]').value;
let message = document.querySelector('textarea').value;

let mail = "mailto:sandeep456don@gmail.com?subject=Website Inquiry&body=Name: " 
+ name + "%0AEmail: " + email + "%0AMessage: " + message;

window.location.href = mail;

}
let text = "I create modern websites for businesses";
let i = 0;

function typingEffect(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typingEffect,50);
}
}

typingEffect();
