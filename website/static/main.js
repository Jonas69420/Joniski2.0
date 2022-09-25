const button = document.getElementById("clicker");
var amount_clicked = 0;

button.addEventListener("click", (e) =>{
    amount_clicked++;
    document.getElementById("counter").textContent = amount_clicked;
});
