const buscador = document.getElementById("buscar");
const fCarro = document.getElementById("fCarro");
const sfCarro = document.getElementById("sfCarro");


buscador.addEventListener("keyup", key => {
    if (key.code === "Enter") {
        location.href = "#main-down"
    }
})

document.addEventListener("keyup", e => {
    if (e.target.matches('#buscar')) {
        document.querySelectorAll(".articulo").forEach(fruta => {
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?fruta.classList.remove("filtro")
                :fruta.classList.add("filtro");
        })
    }
})

fCarro.addEventListener("click", e => {
    fCarro.classList.add("filtro");
    sfCarro.classList.remove("filtro");
    document.getElementById("productosConFiltro").classList.remove("filtro");
    document.getElementById("productosSinFiltro").classList.add("filtro");
})

sfCarro.addEventListener("click", e => {
    sfCarro.classList.add("filtro");
    fCarro.classList.remove("filtro");
    document.getElementById("productosConFiltro").classList.add("filtro");
    document.getElementById("productosSinFiltro").classList.remove("filtro");
})