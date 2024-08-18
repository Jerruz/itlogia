// let title = document.getElementsByClassName("main-title")[0]
// title.style.color = "red";
// console.log(title)

document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}