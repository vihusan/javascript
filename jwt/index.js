const express = require('express'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken'),
    config = require('./configs/config'),
    app = express();

app.set("llave", config.llave);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Servidor esta en escucha por el puerto 3000");
});

app.get("/", (req, res) => {
    res.send('Pagina de incio');
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
})