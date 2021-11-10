const http =  require("http");

http.createServer( ( req, res) => {
    console.log(req); 

    res.write("Hola Mundo");
    res.end();
}).listen(38900);

console.log("Estoy escuchando por el puerto 38900");
