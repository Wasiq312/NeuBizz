let menu = document.querySelector("#menu");
let nav = document.querySelector("#navigation");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    nav.classList.toggle("live");
}