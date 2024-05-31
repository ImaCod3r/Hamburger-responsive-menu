// Here you can see all the interaction

// Selecionar o botoes
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

// Selecionar o menu
const hamburgerMenu = document.getElementById("hamburger-menu");

// add ou remover classe
function menuHandler(menu){
    if(menu.classList.contains("active")){
        menu.classList.remove("active")
    }
    else{
        menu.classList.add("active")
    }
}

openBtn.addEventListener("click", (e) => menuHandler(hamburgerMenu));
closeBtn.addEventListener("click", (e) => menuHandler(hamburgerMenu));