function orderNow(){

let phone = "919548490154";

let message = "Hello Sandeep, I want to order a website";

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url);

}
