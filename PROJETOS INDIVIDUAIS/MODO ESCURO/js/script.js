const changeThemeBtn = document.querySelector("#change-theme")

// TOGGLE MODO ESCURO
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

//CARREGAR MODO CLARO E ESCURO

changeThemeBtn.addEventListener("change", function() {
    toggleDarkMode();

    // SALVAR E REMOVER MODO ESCURO
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }

});