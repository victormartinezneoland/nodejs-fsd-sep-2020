const fs = require('fs');

fs.readFile('./prueba.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log('El contenido del archivo es:', data);
  });

