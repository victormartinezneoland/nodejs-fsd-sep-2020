const fs = require('fs');

const writeModule = {};

writeModule.write = function(contentToWrite) {
    fs.writeFile('./resultado.txt', contentToWrite, (err) => {
        if(err) throw new Error('Se ha producido un error en la escritura');
        console.log('El archivo resultado.txt se ha escrito correctamente');
    });
};

module.exports = writeModule;