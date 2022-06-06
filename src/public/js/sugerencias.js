const buscador = document.getElementById("buscar");

buscador.addEventListener("keyup", key => {
    if (key.code === "Enter") {
        location.href = "./index.html#main-down"
    }
});