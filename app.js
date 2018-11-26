const argv = require('yargs')

.command('listar', 'Imprime en consola la tala de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .argv;

console.log('limite', argv.limite);




//const { crearArchivo } = require('.multiplicar/multiplicar');

// let base = 5;

// let argv = process.argv;

// console.log(argv);
// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));