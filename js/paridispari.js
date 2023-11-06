let sceltaUtente = prompt("Scegli tra pari o dispari");
let numeroUtente = prompt("Inserisci un numero tra 1 e 6");
let numeroComputer = randNumber(1,6);
const numeroVincente = numeroComputer + numeroUtente;


function randNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function oddPair(numeroVincente){
    let risultato = "";

    if(numeroVincente % 2 == 0)
        risultato="pari";
    else{
        risultato="dispari";
    }
        return risultato;
}

if(sceltaUtente == oddPair(numeroVincente)){
    console.log(`CONGRATULAZIONI HAI VINTO! tuo numero ${numeroUtente} numero computer ${numeroComputer}`)
}else{
    console.log(`MI DISPIACE, HAI PERSO! tuo numero ${numeroUtente} numero computer ${numeroComputer}`)

}