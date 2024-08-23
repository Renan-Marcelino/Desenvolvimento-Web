document.addEventListener('DOMContentLoaded',()=> {
    const h1 = document.querySelector("h1");

    h1.innerHTML = "Adeus";

    const entrada = window.prompt("Digite seu Nome:");
    h1.innerHTML = entrada;
})