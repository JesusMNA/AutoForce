const fs = require('fs');

const sugerencias = 'src/public/archivos/sugerencias.txt';
const atencion = 'src/public/archivos/atencion.txt';

const controller = {};

controller.index = ((req, res) => {
    if (req.session.loggedin != true) {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM productos; SELECT * FROM carro;', (err, productos) => {
                if (err) {
                    res.json(err);
                }
                res.render('index', {
                    data: productos[0],
                    carros: productos[1],
                    session: false,
                    usuario: {},
                    relaciones: false
                });
            })
        });
    } else {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM productos; SELECT * FROM carro; SELECT * FROM usuarios WHERE id = ?; SELECT * FROM productocarro;SELECT * FROM usuariocarro', [req.session.name.id], (err, productos) => {
                if (err) {
                    res.json(err);
                }
                res.render('index', {
                    data: productos[0],
                    carros: productos[1],
                    session: true,
                    usuario: productos[2][0],
                    relaciones: productos[3]
                });
            })
        });
    }
})

controller.administrador = ((req, res) => {
    if (req.session.loggedin != true) {
        req.getConnection((err, conn) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/')
        });
    }else {
        if (req.session.name.administrador == 0) {
            req.getConnection((err, conn) => {
                if (err) {
                    res.json(err);
                }
                res.redirect('/')
            });
        }else {
            req.getConnection((err, conn) => {
                conn.query('SELECT * FROM usuarios where administrador = "0"; SELECT * FROM usuarios where administrador = "1"; SELECT * FROM carro; SELECT * FROM productos;SELECT * FROM usuarios WHERE id = ?;SELECT * FROM productocarro', [req.session.name.id], (err, resultados) => {
                    if (err) {
                        res.json(err);
                    }
                    res.render('administrador', {
                        usuarios: resultados[0],
                        administradores: resultados[1],
                        carros: resultados[2],
                        productos: resultados[3],
                        session: true,
                        usuario: resultados[4][0],
                        relaciones: resultados[5]
                    });
                })
            })
        }
    }
})

controller.ingresar = ((req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        }
        res.render('ingresar')
    });
})

controller.registrarse = ((req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM carro', (err, carros) => {
            if (err) {
                res.json(err);
            }
            res.render('registrarse', {
                carros: carros
            });
        })
    });
})

controller.recuperar = ((req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        }
        res.render('recuperar');
    })
})

controller.ubicacion = ((req, res) => {
    if (req.session.loggedin != true) {
        res.render('ubicacion', {
            session: false,
            usuario: {}
        });
    } else {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM usuarios where id = ?', [req.session.name.id], (err, consulta) => {
                if (err) {
                    res.json(err);
                }
                res.render('ubicacion', {
                    usuario: consulta[0],
                    session: true
                });
            })
        });
    }
});

controller.sugerencias = ((req, res) => {
    if (req.session.loggedin != true) {
        res.render('sugerencias', {
            session: false,
            usuario: {}
        });
    }else {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM usuarios where id = ?', [req.session.name.id], (err, consulta) => {
                if (err) {
                    res.json(err);
                }
                res.render('sugerencias', {
                    usuario: consulta[0],
                    session: true
                });
            })
        });
    }
})

controller.atencion = ((req, res) => {
    if (req.session.loggedin != true) {
        res.render('atencion', {
            session: false,
            usuario: {}
        });
    }else {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM usuarios where id = ?', [req.session.name.id], (err, consulta) => {
                if (err) {
                    res.json(err);
                }
                res.render('atencion', {
                    usuario: consulta[0],
                    session: true
                });
            })
        });
    }
})

controller.perfil = ((req, res) => {
    if (req.session.loggedin != true) {
        req.getConnection((err, conn) => {
            if (err) {
                res.json(err);
            }
            res.redirect("/");
        })
    } else {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM carro;SELECT * FROM usuarios where id = ?', [req.session.name.id], (err, consulta) => {
                if (err) {
                    res.json(err);
                }
                res.render('perfil', {
                    carros: consulta[0],
                    usuario: consulta[1][0]
                });
            })
        });
    }
})

controller.carrito = ((req, res) => {
    if(req.session.loggedin != true) {
        res.redirect("/");
    } else {
        const id = req.session.name.id;
        req.getConnection((err,conn) => {
            conn.query('SELECT id_producto FROM carrito where id_usuario = ?;SELECT * FROM productos;SELECT * FROM usuarios WHERE id = ?', [id, req.session.name.id], (err, data) => {
                if(err) {
                    res.json(err);
                }
                res.render('carrito', {
                    relacion: data[0],
                    productos: data[1],
                    usuario: data[2][0],
                    session: true,
                })
            })
        })
    }
})

controller.aniadirUsuario = (req, res) => {
    let { id } = req.params;
    let usuario = req.body; 
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios set ?', [usuario] ,(err, customer) => {
            if(err) {
                res.json(err);
            }
            if (id == 0) {
                res.redirect('/administrador')
            } else if (id == 1) {
                res.redirect('/ingresar')
            }
        })  
    })
}

controller.aniadirAdministrador = (req, res) => {
    let administrador = req.body; 
    administrador.administrador = 1;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios set ?', [administrador] ,(err, customer) => {
            if(err) {
                res.json(err);
            }
            res.redirect('/administrador')
        })  
    })
}

controller.aniadirCarro = (req, res) => {
    let carro = req.body; 
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO carro set ?', [carro] ,(err, customer) => {
            if(err) {
                res.json(err);
            }
            res.redirect('/administrador')
        })  
    })
}

controller.aniadirProducto = (req, res) => {
    let producto = req.body; 
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO productos set ?', [producto] ,(err, customer) => {
            if(err) {
                res.json(err);
            }
            res.redirect('/administrador')
        })  
    })
}

controller.aniadirRelacion = (req, res) => {
    let relacion = req.body; 
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO productocarro set ?', [relacion] ,(err, customer) => {
            if(err) {
                res.json(err);
            }
            res.redirect('/administrador')
        })  
    })
}

controller.eliminarUsuario = (req, res) => {
    let { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuarios WHERE id = ?', [id], (err, rows) => {
            res.redirect('/administrador');
        })
    })
}

controller.eliminarCarro = (req, res) => {
    let { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM carro WHERE id = ?', [id], (err, rows) => {
            res.redirect('/administrador');
        })
    })
}

controller.eliminarProducto = (req, res) => {
    let { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM productos WHERE id = ?', [id], (err, rows) => {
            res.redirect('/administrador');
        })
    })
}

controller.eliminarRelacion = (req, res) => {
    let { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM productocarro WHERE id = ?', [id], (err, rows) => {
            res.redirect('/administrador');
        })
    })
}

controller.editarUsuario = (req, res) => {
    let { id } = req.params;
    let usuario = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuarios set ? WHERE id = ?', [usuario, id], (err, rows) => {
            res.redirect('/administrador');
        })
    })
}

controller.editarUsuario2 = (req, res) => {
    let { id } = req.params;
    let usuario = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuarios set ? WHERE id = ?', [usuario, id], (err, rows) => {
            res.redirect('/perfil');
        })
    })
}

controller.editarCarro = (req, res) => {
    let { id } = req.params;
    let carro = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE carro set ? WHERE id = ?', [carro, id], (err, rows) => {
            res.redirect('/administrador');
        })
    })
}

controller.editarProducto = (req, res) => {
    let { id } = req.params;
    let producto = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE productos set ? WHERE id = ?', [producto, id], (err, row) => {
            res.redirect('/administrador');
        })
    })
}

controller.editarRelacion = (req, res) => {
    let { id } = req.params;
    let relacion = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE productocarro set ? WHERE id = ?', [relacion, id], (err, row) => {
            res.redirect('/administrador');
        })
    })
}

controller.iniciarSesion = (req, res) => {
    let data = req.body;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios WHERE correo = ?', [data.correo], (err, usuario) => {
            if (usuario.length > 0) {
                usuario.forEach(element => {
                    if(element.contraseña != data.contraseña) {
                        res.redirect('/ingresar')
                    } else {
                        req.session.loggedin = true;
                        req.session.name = element;
                        res.redirect('/');
                    }
                });
            }
            else {
                console.log("err")
                res.redirect('/ingresar');
            }
        })
    })
}

controller.cerrarSesion = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

controller.agregarCarrito = (req, res) => {
    if (req.session.loggedin != true) {
        res.redirect('/ingresar');
    }else {
        let { id } = req.params;
        let usuario = req.session.name.id;
        let consulta = {
            id_usuario: usuario,
            id_producto: id
        }
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO carrito set ?', [consulta], (err, consulta) => {
                if(err) {
                    res.json(err);
                }
                res.redirect("/");
            })
        })
    }
}

controller.eliminarCarrito = (req,res) => {
    let { id } = req.params;
    let usuario = req.session.name.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM carrito WHERE id_usuario = ? AND id_producto = ?', [usuario, id], (err, rows) => {
            if(err) {
                res.json(err);
            }
            res.redirect('/carrito');
        })
    })
}

controller.comprarCarrito = (req, res) => {
    let usuario = req.session.name.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM carrito WHERE id_usuario = ?', [usuario], (err, rows) => {
            if(err) {
                res.json(err);
            }
            res.redirect('/carrito');
        })
    })
}

controller.agregarSugerencia = (req, res) => {
    let cuerpo = req.body;
    let contenido = `Nombre del producto: ${cuerpo.nombre}\nDescripción: ${cuerpo.descripcion}\nTipo: ${cuerpo.tipo}\nAño: ${cuerpo.año}\nMarca: ${cuerpo.marca}\nModelo: ${cuerpo.modelo}\n\n`;
    fs.appendFile(sugerencias,contenido, (err) => {
        if (err) {
            throw(err);
        }
        res.redirect("/sugerencias");
    })
}

controller.agregarAtencion = (req, res) => {
    let cuerpo = req.body;
    let contenido = `Nombre del usuario: ${cuerpo.nombre}\nNúmero de telefono: ${cuerpo.telefono}\ncorreo: ${cuerpo.correo}\nfecha: ${cuerpo.fecha}\nInformacion: ${cuerpo.informacion}\n\n`;
    fs.appendFile(atencion,contenido, (err) => {
        if (err) {
            throw(err);
        }
        res.redirect("/atencion");
    })
}

module.exports = controller;
