const empleados = [
    {
        id : 1,
        nombre : "Juan"
    },
    {
        id : 2, 
        nombre : "Fernando"
    }, 
    {
        id : 3,
        nombre :  "David"
    }
];

const salarios = [
    {
        id : 1, 
        salario : 5000
    },
    {
        id : 2,
        salario : 6000
    }

];

const getEmpleadoId = (id) => {
    return new Promise( (resolve, reject) => {
        let empleado = empleados.find( e => e.id === id);
        empleado ? resolve(empleado) : reject(`El empleado con id ${id} no existe`);
    });
}

const getSalarioId = (id) => {
    return new Promise( ( resolve, reject ) => {
        let salario = salarios.find( s => s.id === id );
        salario ? resolve(salario) : reject(`El salario con id ${id} no existe`);
    });
}

const getInfoUsuario = async ( id ) => {
    try {
        const empleado = await getEmpleadoId( id );
        const salario = await getSalarioId( id );

        return `El salario del empleado ${empleado.nombre} es ${salario.salario}`;
    } catch ( error ) {
        throw error;
    }   
}

getInfoUsuario(10)
    .then( msg => console.log( msg ))
    .catch( error => console.log( error ));