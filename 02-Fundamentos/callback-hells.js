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


const getEmpleadoID = ( id , callback) => {
    let empleado = empleados.find( e => e.id === id);

    if (empleado) {
        callback(null, empleado);
    }else{
       let error =  `Empleado con  id ${id} no existe`;
       callback(error, null);
    }
};

const getSalarioID  = ( id , callback ) => {
    let salario = salarios.find( s => s.id === id );

    if (salario){
        callback(null, salario);
    }else{
        let error = `El id del salario ${id} no existe`
        callback(error, null);
    }
};

getSalarioID (2, (err, salario) => {
    if(err) {
        console.log("Eroor !");
        console.log(err);
    }else {
        console.log("Exitoo !!");
        console.log(salario);
    }
});

getEmpleadoID (10, (err, empleado) => {
    if(err) {
        console.log("Eroor !");
        console.log(err);
    }else {
        console.log("Exitoo !!");
        console.log(empleado);
    }
});