const uModal = document.getElementById("modal-usuario");
const uCancelar = document.getElementById("uCancelar");
const bUsuario = document.querySelectorAll(".eUsuario");
const dUsuario = document.querySelectorAll(".dUsuario");

const auModal = document.getElementById("modal-aUsuario");
const auCancelar = document.getElementById("auCancelar");
const baUsuario = document.getElementById("aUsuario");


const aModal = document.getElementById("modal-administrador")
const aCancelar = document.getElementById("aCancelar");
const bAdministrador = document.querySelectorAll(".eAdministrador");
const dAdministrador = document.querySelectorAll(".dAdministrador");

const aaModal = document.getElementById("modal-aAdministrador")
const aaCancelar = document.getElementById("aACancelar");
const baAdministrador = document.getElementById("aAdministrador");


const cModal = document.getElementById("modal-carro");
const cCancelar = document.getElementById("cCancelar");
const bCarro = document.querySelectorAll(".eCarro");
const dCarro = document.querySelectorAll(".dCarro")

const acModal = document.getElementById("modal-aCarro");
const acCancelar = document.getElementById("acCancelar");
const aCarro = document.getElementById("aCarro");


const pModal = document.getElementById("modal-producto");
const pCancelar = document.getElementById("pCancelar");
const bProducto = document.querySelectorAll(".eProducto");
const dProducto = document.querySelectorAll(".dProducto");

const apModal = document.getElementById("modal-aProducto");
const apCancelar = document.getElementById("apCancelar");
const aProducto = document.getElementById("aProducto");


const oModal = document.getElementById("modal-oferta");
const oCancelar = document.getElementById("oCancelar");
const bRelacion = document.querySelectorAll(".eRelacion");
const dRelacion = document.querySelectorAll(".dRelacion");

const aoModal = document.getElementById("modal-aOferta");
const aoCancelar = document.getElementById("aoCancelar");
const aOferta = document.getElementById("aOferta");


const mEliminar = document.getElementById("modal-eliminar");
const eCancelar = document.getElementById("dCancelar");


bUsuario.forEach(boton => {
    boton.addEventListener("click", () => {
        let id = boton.id;
        id = parseInt(id);
        document.getElementById("mEditarUsuario").setAttribute('action', `/editarUsuario/${id}`);
        document.getElementById("mEditarUsuario").setAttribute('method', 'post');
        document.getElementById("uNombre").setAttribute('value', document.getElementById(`usuarioNombre-${id}`).innerHTML);
        document.getElementById('uCorreo').setAttribute('value', document.getElementById(`usuarioCorreo-${id}`).innerHTML);
        document.getElementById('uTelefono').setAttribute('value', document.getElementById(`usuarioTelefono-${id}`).innerHTML);
        document.getElementById('uDireccion').setAttribute('value', document.getElementById(`usuarioDireccion-${id}`).innerHTML);
        uModal.classList.add("modal-usuario--show");
    })
})

dUsuario.forEach(boton => {
    boton.addEventListener("click", () => {
        let id = boton.id;
        id = parseInt(id);
        document.getElementById("confirmarEliminar").setAttribute('href', `/eliminarUsuario/${id}`);
        document.getElementById("eliminar-elemento").innerHTML = document.getElementById(`usuarioNombre-${id}`).innerHTML;
        mEliminar.classList.add("modal-eliminar--show");
    })
})

uCancelar.addEventListener("click", () => {
    uModal.classList.remove("modal-usuario--show");
});

baUsuario.addEventListener("click", () => {
    auModal.classList.add("modal-aUsuario--show");
});

auCancelar.addEventListener("click", () => {
    auModal.classList.remove("modal-aUsuario--show");
});



bAdministrador.forEach(boton => {
    boton.addEventListener('click', () => {
        let id = boton.id;
        id = parseInt(id);
        document.getElementById("mEditarAdministrador").setAttribute('action', `/editarUsuario/${id}`);
        document.getElementById("mEditarAdministrador").setAttribute('method', 'post');
        document.getElementById("aNombre").setAttribute('value', document.getElementById(`administradorNombre-${id}`).innerHTML);
        document.getElementById('aCorreo').setAttribute('value', document.getElementById(`administradorCorreo-${id}`).innerHTML);
        document.getElementById('aTelefono').setAttribute('value', document.getElementById(`administradorTelefono-${id}`).innerHTML);
        document.getElementById('aDireccion').setAttribute('value', document.getElementById(`administradorDireccion-${id}`).innerHTML);
        aModal.classList.add("modal-administrador--show");
    })
})

dAdministrador.forEach(boton => {
    boton.addEventListener("click", () => {
        let id = boton.id;
        id = parseInt(id);
        document.getElementById("confirmarEliminar").setAttribute('href', `/eliminarUsuario/${id}`);
        document.getElementById("eliminar-elemento").innerHTML = document.getElementById(`administradorNombre-${id}`).innerHTML;
        mEliminar.classList.add("modal-eliminar--show");
    })
})

aCancelar.addEventListener("click", () => {
    aModal.classList.remove("modal-administrador--show");
});

baAdministrador.addEventListener("click", () => {
    aaModal.classList.add("modal-aAdministrador--show");
});

aACancelar.addEventListener("click", () => {
    aaModal.classList.remove("modal-aAdministrador--show");
});



bCarro.forEach(boton => {
    boton.addEventListener("click", () => {
        let id = boton.id;
        id = parseInt(id);
        document.getElementById("mEditarCarro").setAttribute('action', `/editarCarro/${id}`);
        document.getElementById("mEditarCarro").setAttribute('method', 'post');
        document.getElementById("cModelo").setAttribute('value', document.getElementById(`carroModelo-${id}`).innerHTML);
        document.getElementById('cMarca').setAttribute('value', document.getElementById(`carroMarca-${id}`).innerHTML);
        document.getElementById('cAño').setAttribute('value', document.getElementById(`carroAño-${id}`).innerHTML);
        cModal.classList.add("modal-carro--show");
    })
})

dCarro.forEach(boton => {
    boton.addEventListener("click", () => {
        let id = boton.id;
        id = parseInt(id);
        document.getElementById("confirmarEliminar").setAttribute('href', `/eliminarCarro/${id}`);
        document.getElementById("eliminar-elemento").innerHTML = document.getElementById(`carroModelo-${id}`).innerHTML;
        mEliminar.classList.add("modal-eliminar--show");
    })
})

cCancelar.addEventListener("click", () => {
    cModal.classList.remove("modal-carro--show");
});

aCarro.addEventListener("click", () => {
    acModal.classList.add("modal-aCarro--show");
});

acCancelar.addEventListener("click", () => {
    acModal.classList.remove("modal-aCarro--show");
});



bProducto.forEach(boton => {
    boton.addEventListener("click", () => {
        let id = boton.id;
        id = parseInt(id);
        document.getElementById("mEditarProducto").setAttribute('action', `/editarProducto/${id}`);
        document.getElementById("mEditarProducto").setAttribute('method', 'post');
        document.getElementById("pNombre").setAttribute('value', document.getElementById(`productoNombre-${id}`).innerHTML);
        document.getElementById('pPrecio').setAttribute('value', document.getElementById(`productoPrecio-${id}`).innerHTML);
        document.getElementById('pCantidad').setAttribute('value', document.getElementById(`productoCantidad-${id}`).innerHTML);
        pModal.classList.add("modal-producto--show");
    })
})

dProducto.forEach(boton => {
    boton.addEventListener("click", () => {
        let id = boton.id;
        id = parseInt(id);
        document.getElementById("confirmarEliminar").setAttribute('href', `/eliminarProducto/${id}`);
        document.getElementById("eliminar-elemento").innerHTML = document.getElementById(`productoNombre-${id}`).innerHTML;
        mEliminar.classList.add("modal-eliminar--show");
    })
})

pCancelar.addEventListener("click", () => {
    pModal.classList.remove("modal-producto--show");
});

aProducto.addEventListener("click", () => {
    apModal.classList.add("modal-aProducto--show");
});

apCancelar.addEventListener("click", () => {
    apModal.classList.remove("modal-aProducto--show");
});



bRelacion.forEach(boton => {
    boton.addEventListener("click", () => {
        let id = boton.id;
        id = parseInt(id);
        document.getElementById("mEditarRelacion").setAttribute('action', `/editarRelacion/${id}`);
        document.getElementById("mEditarRelacion").setAttribute('method', 'post');
        oModal.classList.add("modal-oferta--show");
    })
})

dRelacion.forEach(boton => {
    boton.addEventListener("click", () => {
        let id = boton.id;
        id = parseInt(id);
        document.getElementById("confirmarEliminar").setAttribute('href', `/eliminarRelacion/${id}`);
        document.getElementById("eliminar-elemento").innerHTML = document.getElementById(`carroRelacion-${id}`).innerHTML;
        mEliminar.classList.add("modal-eliminar--show");
    })
})

oCancelar.addEventListener("click", () => {
    oModal.classList.remove("modal-oferta--show");
});


aOferta.addEventListener("click", () => {
    aoModal.classList.add("modal-aOferta--show");
});

aoCancelar.addEventListener("click", () => {
    aoModal.classList.remove("modal-aOferta--show");
});


eCancelar.addEventListener("click", () => {
    mEliminar.classList.remove("modal-eliminar--show");
})

document.addEventListener("keyup", e => {
    if (e.target.matches('#buscar')) {
        document.querySelectorAll(".elemento").forEach(fruta => {
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?fruta.classList.remove("filtro")
                :fruta.classList.add("filtro");
        })
    }
})