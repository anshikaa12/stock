var pprice = document.querySelector("#pprice");
var stock = document.querySelector("#quant");
var cprice = document.querySelector("#cprice");
var btn = document.querySelector("#btn");
var res = document.querySelector(".result");
var box = document.querySelector(".container");

res.style.display = "none";
btn.addEventListener("click", function check() {
    var a = Number(pprice.value);
    var b = Number(stock.value);
    var c = Number(cprice.value);
    var sub = Math.abs((a * b) - (c * b));


    var per = (((c * b) - (a * b)) * 100) / (a * b);


    if (per < 0) {
        res.innerText = "You are at a loss of " + Math.abs(per) + "%. LOSS = Rs. " + sub;
        res.style.display = "block";
        box.style.backgroundImage = 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/550d9157-b095-4115-9585-eb34273e960c/d9lnoky-aad248e5-97d8-471f-a112-2c7a225a6352.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MGQ5MTU3LWIwOTUtNDExNS05NTg1LWViMzQyNzNlOTYwY1wvZDlsbm9reS1hYWQyNDhlNS05N2Q4LTQ3MWYtYTExMi0yYzdhMjI1YTYzNTIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eN1S__9pdnUaVsFw-pdtofCOe9E77AWzB50GdvGktmw")';
    } else if (per === 0) {
        res.innerText = "You are neither at profit nor at loss";
        res.style.display = "block";
        box.style.backgroundImage = "none";
    } else {
        res.innerText = "You are at a profit of " + per + "%. PROFIT = Rs. " + sub;
        res.style.display = "block";
        box.style.backgroundImage = 'url("https://acegif.com/wp-content/gifs/raining-money-14.gif")';
    }

})