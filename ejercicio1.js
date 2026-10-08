const readline=require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('ingrese un numero entero y que este sea positivo:',(entrada)=>{

    let limite = parseInt(entrada);

    if(isNaN(limite) || limite < 2){
        console.log('dato invalido');

    }else {

    let numero=2;

    while(numero <= limite) {
        console.log(numero);
        numero+=2;
    }
}
    rl.close();
})

