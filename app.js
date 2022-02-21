console.clear()

const colors = require("colors") // "colors" modulo de terceros
const process = require("process") // "process" modulo nativo. Requerimos process  para poder utilizar "argv"

const sumar = require("./sumar")
const restar = require("./restar")
const multiplicar = require("./multiplicar")
const dividir = require("./dividir")


const operacion = process.argv[2].toLowerCase()
const numeroA = +process.argv[3] 
const numeroB= +process.argv[4]

console.log("****Bienvenidos a nuestra App".blue + " " + "*CALCULADORA*".yellow)

if (operacion !== "sumar" && operacion !== "restar" && operacion !== "multiplicar" && operacion !== "dividir") {
    
    console.log("Opercion Incorrecta. ".red + "Operaciones disponibles: sumar, restar, multiplicar, dividir.");

}else if(operacion === "sumar"){

    console.log("Resultado Operacion:" + " " + sumar(numeroA,numeroB))



}else if(operacion === "restar"){

    console.log("Resultado Operacion:" + " " + restar(numeroA,numeroB))



}else if(operacion === "multiplicar"){

    if (numeroA === 0 || numeroB === 0) {
    
         console.log("Resultado: " + " " + "Todo numero multiplicado por cero da como resultado cero!!!".red);

    }else{

    console.log("Resultado Operacion:" + " " + multiplicar(numeroA,numeroB))
}


}else if(operacion === "dividir"){

    if (numeroA === 0 || numeroB === 0) {   

         console.log("No se puede dividir por cero!!!".red);  

    }else {

        console.log("Resultado Operacion:" + " " + dividir(numeroA,numeroB))
}
}

return console.log("****".black + "Gracias por utilizar CALCULADORA".green + "****".black)


 
//console.log(sumar(2,6));        // 8
//console.log(restar(4,2));       // 2
//console.log(multiplicar(3,3));  // 9
//console.log(dividir(8,2));      // 4