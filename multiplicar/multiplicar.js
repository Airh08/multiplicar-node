//requireds
const fs = require('fs');
const colors = require('colors');

////v.2
let listarTabla = (base, limite = 10) => {
    console.log('==============='.green);
    console.log(`==tabla de ${base}==`.green);
    console.log('==============='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}\n`);
    }
}

////v.2
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';

        //tabla de multiplicar
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;
            //console.log(`${base}*${i}=${base*i}`);
        }

        //Escribiendo en un doc
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}