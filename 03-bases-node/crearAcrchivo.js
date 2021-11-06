const fs = require('fs');
const { resolve } = require('path/posix');

const crearArchivo = async (base) => {
    try {
        let salida = '';

        for (let i=1; i<=10; i++) { 
            salida += `${i} x ${base} = ${i * base}\n`;
        }

        fs.writeFileSync(`tabla_del_${base}.txt`, salida);

        return `tabla_del_${base}.txt`;
    }catch( error ){
        throw error;
    }
}

module.exports = { crearArchivo };