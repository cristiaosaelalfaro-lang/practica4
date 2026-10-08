
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuántas notas va a ingresar?: ', (entrada) => {

    let cantidad = parseInt(entrada);

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log('Cantidad inválida');
        rl.close();
        return;
    }

    let suma = 0;
    let notasIngresadas = 0;

    function pedirNotas() {
        if (notasIngresadas === cantidad) {
            let promedio = suma / cantidad;

            console.log(`Suma total: ${suma}`);
            console.log(`Promedio final: ${promedio.toFixed(2)}`);

            rl.close();
            return;
        }

        rl.question(`Ingrese la nota ${notasIngresadas + 1}: `, (entradaNota) => {
            let nota = parseFloat(entradaNota);

            if (isNaN(nota)) {
                console.log('Nota inválida. Intente nuevamente.');
                pedirNotas();
                return;
            }

            suma += nota;
            notasIngresadas++;

            pedirNotas();
        });
    }

    for (let i = 1; i <= cantidad; i++) {
        pedirNotas();
        break;
    }
});
