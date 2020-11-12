const fs = require('fs');
const fileName = process.argv[1];

if(!fileName) {
    throw new Error('No existe el archivo!')
}

fs.watch(fileName, () => {
    console.log(`El archivo ${fileName} ha sido modificado`);
});

console.log('Comprobando el estado del archivo');

// Hola