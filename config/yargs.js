
const argv = require('yargs')
    .option('b',{
        alias:'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'la base tiene que ser un numero';
        }
        return true;
    } )
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla'
    })
    .option('h', {
        alias:'hasta',
        type: 'number',
        default: 10,
        describe: 'Declara hasta donde quieres extender tu multiplicación'
    })
    .check( (argv, options) => {
        if( isNaN( argv.h ) ){
            throw 'El hasta tiene que ser un numero';
        }
        return true;
    } )
    .argv;

    module.exports = argv;