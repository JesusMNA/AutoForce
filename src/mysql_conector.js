const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');

//Crear la conexión

const conector = mysql.createConnection({
    host: 'localhost',
    user: 'jesus',
    password: 'jesus123',
    database: 'autoforce'
});

conector.connect(err => {
    if (err) throw err;
    console.log('Conectado');
})

// async function conectar() {
//     return new Promise((res, rej) => {
//         conector.connect(err => {
//             if (err) throw err;
//             console.log('Conectado');
//             res();
//         })
//     })
// }

// Productos

async function agregarProducto(foto, nombre, precio, cantidad) {
    const sql = `INSERT INTO productos (id, foto, nombre, precio, cantidad) VALUES (${null}, "${foto}", "${nombre}", ${precio}, ${cantidad})`;
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        console.log(resultado)
    })
}

async function editarProducto(id, foto, nombre, precio, cantidad) {
    return new Promise((res, rej) => {
        const sql = `UPDATE productos SET foto="${foto}", nombre="${nombre}", precio=${precio}", cantidad=${cantidad} where id=${id}`;
        conector.query(sql, (err, resultado, field) => {
            if (err) throw err;
            console.log(resultado)
        })
    })
}

async function obtenerProductos() {
    return new Promise((res, rej) => {
        const sql = 'SELECT * FROM productos';
        conector.query(sql, (err, resultado, field) => {
            if (err) throw err;
            res(resultado);
        })
    })
}

const borrarProducto = id => {
    const sql = `DELETE FROM productos where id=${id}`;
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        console.log(resultado);
    })
}

// carros

const agregarCarro = (foto, marca, modelo, año) => {
    const sql = `INSERT INTO carro (id, foto, marca, modelo, año) VALUES (${null}, "${foto}", "${marca}", "${modelo}", ${año})`;
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        console.log(resultado)
    })
}

const editarCarro = (id, foto, marca, modelo, año) => {
    const sql = `UPDATE carro SET foto="${foto}", marca="${marca}", modelo="${modelo}", año=${año} where id=${id}`;
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        console.log(resultado)
    })
}

const obtenerCarro = () => {
    const sql = 'SELECT * FROM carro';
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        todos = resultado;
    })
    return todos;
}

const borrarCarro = id => {
    const sql = `DELETE FROM carro where id=${id}`;
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        console.log(resultado);
    })
}

// Usuarios

const agregarUsuario = (foto, nombre, telefono, contraseña, cumpleaños, estado, ciudad, direccion, cp, administrador, id_carro) => {
    const sql = `INSERT INTO usuarios (id, foto, nombre, telefono, contraseña, cumpleaños, estado, ciudad, direccion, cp, administrador, id_carro) VALUES (${null}, "${foto}", "${nombre}", ${telefono}, "${contraseña}", "${cumpleaños}", "${estado}", "${ciudad}", "${direccion}", ${cp}, ${administrador}, ${id_carro})`;
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        console.log(resultado)
    })
}

const editarUsuario = (foto, nombre, telefono, contraseña, cumpleaños, estado, ciudad, direccion, cp, administrador, id_carro) => {
    const sql = `UPDATE usuarios SET foto="${foto}", nombre="${nombre}", telefono=${telefono}, contraseña="${contraseña}", cumpleaños="${cumpleaños}", estado="${estado}", ciudad="${ciudad}", direccion="${direccion}", cp=${cp}, administrador=${administrador}, id_carro=${id_carro} where id=${id}`;
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        console.log(resultado)
    })
}

const obtenerUsuario = () => {
    const sql = 'SELECT * FROM usuarios';
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        todos = resultado;
    })
    return todos;
}

const borrarUsuario = id => {
    const sql = `DELETE FROM usuarios where id=${id}`;
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        console.log(resultado);
    })
}

// Ofertas

const agregarOferta = (foto, nombre, id_producto, precio, oferta) => {
    const sql = `INSERT INTO ofertas (id, foto, id_producto, precio, oferta) VALUES (${null}, "${foto}", "${nombre}", ${id_producto}, ${precio}, ${oferta})`;
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        console.log(resultado)
    })
}

const editarOferta = (id, foto, nombre, id_producto, precio, oferta) => {
    const sql = `UPDATE ofertas SET foto="${foto}", nombre="${nombre}", id_producto=${id_producto}", precio=${precio}, oferta=${oferta} where id=${id}`;
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        console.log(resultado)
    })
}

const obtenerOfertas = () => {
    const sql = 'SELECT * FROM ofertas';
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        todos = resultado;
    })
    return todos;
}

const borrarOferta = id => {
    const sql = `DELETE FROM ofertas where id=${id}`;
    conector.query(sql, (err, resultado, field) => {
        if (err) throw err;
        console.log(resultado);
    })
}

module.exports.agregarProducto = agregarProducto;
module.exports.editarProducto = editarProducto;
module.exports.obtenerProductos = obtenerProductos;
module.exports.borrarProducto = borrarProducto;
module.exports.agregarCarro = agregarCarro;
module.exports.editarCarro = editarCarro;
module.exports.obtenerCarro = obtenerCarro;
module.exports.borrarCarro = borrarCarro;
module.exports.agregarUsuario = agregarUsuario;
module.exports.editarUsuario = editarUsuario;
module.exports.obtenerUsuario = obtenerUsuario;
module.exports.borrarUsuario = borrarUsuario;
module.exports.agregarOferta = agregarOferta;
module.exports.editarOferta = editarOferta;
module.exports.obtenerOfertas = obtenerOfertas;
module.exports.borrarOferta = borrarOferta;