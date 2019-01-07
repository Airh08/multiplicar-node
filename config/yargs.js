////v.5
const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10

    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opt)
    .help()
    .argv;


module.exports = {
    argv
}

// ////v.2
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10

//         }
//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10

//         }
//     })
//     .help()
//     .argv; //v.2

// ////v.2