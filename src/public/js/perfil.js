const openModal = document.getElementById("cContraseña");
const modal = document.getElementById("modalContraseña");
const cerrar = document.getElementById("bCancelar");

openModal.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.add('modal-contraseña--show');
});

cerrar.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.remove('modal-contraseña--show');
});