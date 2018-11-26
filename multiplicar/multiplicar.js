const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El parámetro ${base} No es un numero`);
            return;
        }

        let linea = '';

        for (let i = 1; i <= 10; i++) {
            linea += `
                                $ { base } * $ { i } = $ { base * i }\
                                n `;
        }

        fs.writeFile(`
                                tablas / tabla$ { base }.txt `, linea, (err) => {
            if (err) reject(err);
            else
                resolve(`
                                tabla - $ { base }.txt `);
        });
    })
}

module.exports = {
    crearArchivo
}