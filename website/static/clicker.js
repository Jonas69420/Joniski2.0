const clicker = document.getElementById("clicker-button");
const counter = document.getElementById("clicker-counter");
let clicks = 0;

function getCookie(name){
  cookieMap = document.cookie.split(";").map(cookie => cookie.split("="));
  for (let cookie of cookieMap) {
    if (cookie[0] == name){
      return cookie[1]
    }
  }

  return "";
}

if (isNaN(parseInt(getCookie("clicks")))){
  clicks = 0;
  document.cookie = "clicks=0";
}else{
  clicks = parseInt(getCookie("clicks"));
}
counter.textContent = clicks;

function Earn(amount, id){
  clicks += amount;
  counter.textContent = clicks;

  document.cookie = "clicks=" + clicks;
}

clicker.addEventListener("click", (e) => {
  Earn(1, 0);  
});


