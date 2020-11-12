const fs = require('fs');
const writeModule = require('../writer/index');

const counterModule = {
    count: function() {
        fs.readFile('./el_quijote.txt', 'utf-8', (err, data) => {
            if(err) throw new Error('Se ha producido un error en la lectura');
            // console.log(data);

            // // Opción 1
            // let splittedData = data.split(' ');
            // console.log(splittedData);

            // let sanchoCounter = 0;
            // for(let i=0; i<splittedData.length; i++) {
            //     if(splittedData[i].search(/sancho/gi) !== -1) {
            //         sanchoCounter ++
            //     }
            // }

            // Opción 2
            let sanchoCounter = data.match(/sancho/gi).length;
            console.log('El número de Sanchos es: ', sanchoCounter);

            writeModule.write(`El número total de apariciones de Sancho es: ${sanchoCounter}`);
        });
    }
};

module.exports = counterModule;