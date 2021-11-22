const express = require('express'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken'),
    config = require('./configs/config'),
    app = express();

const rutasProtegidas = express.Router();

rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, app.get('llave'), (err, decoded) => {
            if (err)
                return res.json({ "mensaje": "token invalida" });
            else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        res.json({ "mensaje": "Token prohibida" });
    }
})

app.set("llave", config.llave);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Servidor esta en escucha por el puerto 3000");
});

app.get("/", (req, res) => {
    res.send('Pagina de incio');
});

app.get('/datos', rutasProtegidas, (req, res) => {
    const datos = [
        { id: 1, nombre: "Asfo" },
        { id: 2, nombre: "Denisse" },
        { id: 3, nombre: "Carlos" }
    ];

    res.json(datos);
});

app.post('/autenticar', (req, res) => {
    if (req.body.usuario === "asfo" && req.body.contrasena === "holamundo") {
        const payload = {
            check: true
        };
        const token = jwt.sign(payload, app.get('llave'), {
            expiresIn: 1440
        });
        res.json({
            mensaje: 'Autenticación correcta',
            token: token
        });
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos" })
    }
});
