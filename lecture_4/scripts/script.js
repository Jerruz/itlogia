// let title = document.getElementsByClassName("main-title")[0]
// title.style.color = "red";
// console.log(title)

// навигация по кнопке "купить"
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