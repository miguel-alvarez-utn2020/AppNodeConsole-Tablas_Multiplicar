const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {


    try{

        let salida = '';
        let nombreArchivo = `Tabla del ${base}.txt`

        for(let i = 1; i <= hasta; i++ ){
    
            let resultado = base * i;
    
            salida += ` ${base} x ${i} = ${resultado}\n`;
        }
        if(listar){
            
            console.log('====TABLA DE MULTIPLICAR====');
            console.log(`        Tabla del ${base}         `.underline.bgWhite.black);
            console.log(`                            \n`.underline);
        
            console.log(`${salida}`);
        
            console.log('============================');
            console.log('============================');
        }
    
        fs.writeFileSync( `./salida/${nombreArchivo}.txt` , salida);
        
        return nombreArchivo;
        
    }catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}