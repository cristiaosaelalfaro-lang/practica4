
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el numero de filas: ', (entradaFilas) => {
    let filas = parseInt(entradaFilas);

    if (isNaN(filas) || filas <= 0) {
        console.log('Cantidad de filas invalida');
        rl.close();
        return;
    }

    rl.question('Ingrese el numero de columnas: ', (entradaColumnas) => {
        let columnas = parseInt(entradaColumnas);

        if (isNaN(columnas) || columnas <= 0) {
            console.log('Cantidad de columnas invalida');
            rl.close();
            return;
        }

        for (let fila = 1; fila <= filas; fila++) {
            for (let columna = 1; columna <= columnas; columna++) {
                console.log(`[${fila}, ${columna}]`);
            }
        }

        rl.close();
    });
});
