// let title = document.getElementsByClassName("main-title")[0]
// title.style.color = "red";
// console.log(title)

// навигация по кнопке "закзать"
document.getElementById("main-action-button").onclick = function () {
    let scroll = document.getElementById("products");
    scroll.scrollIntoView({behavior: 'smooth'});
}

// навигация по меню
const links = document.querySelectorAll(".menu-item > a");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: 'smooth'});
    }
}

// события на кнопки заказать
const buttons = document.querySelectorAll(".products-item button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: 'smooth'})   ;
    }
}

// переключаем валюту
const prises = document.getElementsByClassName("products-item-price");
console.log(prises);
document.getElementById("change-currency").onclick = function (e) {
    const currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;
    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 90;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prises.length; i++) {
        prises[i].innerText = +(prises[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}