let obrazek = document.getElementById("logo")

let obecneZrodlo = obrazek.getAttribute("src")

let button = document.getElementById("toggleBtn")

let scriptEnabled = false

let hidden = false 

let btn = document.getElementById("btn")

let piska = document.getElementById("piska")

let btnMurino = document.getElementById("btnMurino")

let murino = document.getElementById("murino")

let heaven = document.getElementById("heaven")

let hell = document.getElementById("hell")

function toggleScript() {

    if (!scriptEnabled) {
        scriptEnabled = true
        console.log("ON")

        obrazek.setAttribute("src", "epstein2.jpg")
        button.textContent = "ВОЙТИ В РАЙ"
        document.body.classList.add("dark")
        btn.classList.add("hidden")
        btnMurino.classList.add("hidden")

        hell.style.display = "block"
         heaven.style.display = "none"   // ПОКАЗАТЬ

    } else {
        scriptEnabled = false
        console.log("OFF")

        obrazek.setAttribute("src", obecneZrodlo)
        button.textContent = "ВОЙТИ В АД "
         document.body.classList.remove("dark")
         btn.classList.remove("hidden")
         btnMurino.classList.remove("hidden")

          hell.style.display = "none"
           heaven.style.display = "block"   // СКРЫТЬ
         
    }

}   

function tuglScript() {
    if (!scriptEnabled) {
        scriptEnabled = true

        obrazek.setAttribute("src", "chill.jpg")
        btn.textContent = "!!!"
        document.body.classList.add("green")
        button.classList.add("hidden")
        piska.textContent = "ДОБРО ПОЖАЛОВАТЬ В МЫТИЩИ!"
         btnMurino.classList.add("hidden")
           heaven.style.display = "none"
    } else {
        scriptEnabled = false
        console.log("OFF")

        obrazek.setAttribute("src", obecneZrodlo)
        btn.textContent = "???"
        document.body.classList.remove("green")
        button.classList.remove("hidden")
         piska.textContent = "Nasze Logo:"
          btnMurino.classList.remove("hidden")
           heaven.style.display = "block"
    }
    
}

function tulScript() {
    if (!scriptEnabled) {
        // Включаем режим Murino
        scriptEnabled = true;

        obrazek.setAttribute("src", "fog.jpg");
        btnMurino.textContent = "ВЫЙТИ С МУРИНО";
        document.body.classList.add("murino");
        button.classList.add("hidden");
        btn.classList.add("hidden");
        piska.textContent = "ДОБРО ПОЖАЛОВАТЬ В MУРИНО, УДАЧИ ВЫЖИТЬ!";

        // Показываем div Murino
        murino.style.display = "block";
          heaven.style.display = "none"

    } else {
        // Выключаем режим Murino
        scriptEnabled = false;

        obrazek.setAttribute("src", obecneZrodlo);
        btnMurino.textContent = "Вход в мурино";
        document.body.classList.remove("murino");
        button.classList.remove("hidden");
        btn.classList.remove("hidden");
        piska.textContent = "Nasze Logo:";

        // Скрываем div Murino
        murino.style.display = "none";
         heaven.style.display = "block"
    }
}

