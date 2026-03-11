document.addEventListener("DOMContentLoaded", function() {

    let pojTekst = document.getElementById("pojemnik-tekst")
    let pojHtml = document.getElementById("pojemnik-html")
    let btn = document.getElementById("toggleBtn")
    let themeBtn = document.getElementById("themeBtn")

    let oryginalnyTekst = pojTekst.textContent
    let oryginalnyHtml = pojHtml.innerHTML

    let aktywny = false
    let komunikat = null
    let darkMode = false

    btn.addEventListener("click", function() {

        if (!aktywny) {
            pojTekst.textContent = "Zupełnie nowy, bezpieczny tekst!"
            pojHtml.innerHTML = "Status: <strong style='color: #008568;'>Pełna gotowość</strong>"

            komunikat = document.createElement("p")
            komunikat.innerHTML = "<i>Skrypt wykonał podmianę treści!</i>"
            document.querySelector(".jiji").appendChild(komunikat)

            btn.textContent = "Wyłącz skrypt"
            aktywny = true
        } else {
            pojTekst.textContent = oryginalnyTekst
            pojHtml.innerHTML = oryginalnyHtml

            if (komunikat) komunikat.remove()

            btn.textContent = "Włącz skrypt"
            aktywny = false
        }
    })

    themeBtn.addEventListener("click", function() {

        if (!darkMode) {
            document.body.classList.add("dark")
            themeBtn.textContent = "Jasny motyw"
            darkMode = true
        } else {
            document.body.classList.remove("dark")
            themeBtn.textContent = "Ciemny motyw"
            darkMode = false
        }
    })

})