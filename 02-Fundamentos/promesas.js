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

]

let myID = 10;

const getEmpleadoId = (id) => {
    return new Promise( (resolve, reject) => {
        let empleado = empleados.find( e => e.id === id);
        empleado ? resolve(empleado) : reject(`El empleado con id ${id} no existe`);
    });
};

const getSalarioId = (id) => {
    return new Promise( ( resolve, reject ) => {
        let salario = salarios.find( s => s.id === id );
        salario ? resolve(salario) : reject(`El salario con id ${id} no existe`);
    });
};



getEmpleadoId(myID)
    .then( empleado => getSalarioId(empleado.id) )
    .then( salario => console.log(salario) )
    .catch( error => console.log( error ) );