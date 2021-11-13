const express = require('express');
const cors = require('cors');

class server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Directorio publico
        this.app.use(express.static('public'));
        // Proteccion superficial
        this.app.use(cors());
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.status(200).json({
                msg: "get API"
            });
        });

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("rest escuchando por ", this.port);
        });
    }
}

module.exports = server;

