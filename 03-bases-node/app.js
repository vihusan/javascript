const { crearArchivo } = require('./crearAcrchivo');
const argv = require('yargs').argv;

crearArchivo(3)
    .then(n_archivo => console.log(`Archivo ${n_archivo} creado exitosamente`))
    .catch(error => console.error(error));