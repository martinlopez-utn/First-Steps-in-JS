//alert('Hola Mundo');
let rangoUser = prompt('De 1 a que numero deseas que sea el juego?')

let numeroSecreto = Math.floor(Math.random()*rangoUser)+1;
let numeroUsuario = 0;
let intentos = 1;
let maxIntentos = 4;
console.log('El nro secreto es ' + numeroSecreto);

while(numeroSecreto!=numeroUsuario){
    numeroUsuario = parseInt(prompt('Me indicas un numero entre 1 y '+ rangoUser +', por favor:'));

    console.log(`el numero ingresado es ${numeroUsuario}`);

   

    if(numeroSecreto == numeroUsuario) {
        alert(`Acertaste, el numero es: ${numeroUsuario}, lograste acertarlo en ${intentos} ${intentos ==1 ? "vez" : "veces"}`); //con acento inv

    } else {
        if(numeroUsuario<numeroSecreto){
            alert('El nro secreto es mayor');
        } else{
            alert('El numero secreto es menor');
        }
        intentos++;
       
        if(intentos>maxIntentos){
            alert('Solo se puede intentar '+ maxIntentos +' veces');//sin acento inv
            break;
        }
    }

}
