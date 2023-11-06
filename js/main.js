const parola = prompt("Inserisci una parola.");


function isPalindroma(parola, palindroma) {
    let palindroma = "";

    for ( let i=parola.length-1; i >= 0; i-- ){

       separa = parola[i];
       console.log(separa);
       palindroma += separa;
    }
    return palindroma;
}

console.log(palindroma);