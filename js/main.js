const parola = prompt("Inserisci una parola.");


function isPalindroma(parola) {
    let palindroma = "";

    for ( let i=parola.length-1; i >= 0; i-- ){

       separa = parola[i];
       palindroma += separa;
    }
    return palindroma;
}

verificaParola = isPalindroma(parola);

if (parola == verificaParola){
    console.log("LA PAROLA INSERITA É PALINDROMA")
}else{
    console.log("LA PAROLA INSERITA NON É PALINDROMA!")
}