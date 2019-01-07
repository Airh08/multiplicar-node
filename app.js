const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
////v.3
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar'); //v.3
        ////v.4
        listarTabla(argv.base, argv.limite);
        ////v.4
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;

}
////v.3



//console.log(argv.base);


////v.1
//let base = 2;//v.1
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado:${archivo}`))
//     .catch(e => console.log(e));
////v.1