const modal = document.getElementById("modal-pagar");
const abrir = document.getElementById("pagar");
const cerrar = document.getElementById("bCancelar");
const buscador = document.getElementById("buscar");

abrir.addEventListener("click", () => {
    modal.classList.add("modal-pagar--show");
});

cerrar.addEventListener("click", () => {
    modal.classList.remove("modal-pagar--show");
});


buscador.addEventListener("keyup", key => {
    if (key.code === "Enter") {
        location.href = "./index.html#main-down"
    }
})