console.log('Inicio de programa');

setTimeout(() => {
    console.log("Primer setTimeOut");
}, 3000);

setTimeout(() => {
    console.log("Segundo setTimeOut")
},0);

setTimeout(() => {
    console.log("Tercer setTimeOut")
}, 0);

console.log('Fin del programa');