function generazione() {
    var giocatore1 = Math.floor((Math.random() * 100) + 1);
    var giocatore2 = Math.floor((Math.random() * 100) + 1);
    var estratto = Math.floor((Math.random() * 100) + 1);
    console.log("Numero giocatore 1: ".concat(giocatore1));
    console.log("Numero giocatore 2: ".concat(giocatore2));
    console.log("Numero estratto: ".concat(estratto));
    confronto(giocatore1, giocatore2, estratto);
}
function confronto(giocatore1, giocatore2, estratto) {
    if (giocatore1 == estratto) {
        console.log("Il giocatore 1 ha indovinato!");
    }
    else if (giocatore2 == estratto) {
        console.log("Il giocatore 2 ha indovinato!");
    }
    else if ((Math.abs(estratto - giocatore1)) < (Math.abs(estratto - giocatore2))) {
        console.log("Nessuno ha indovinato, ma il giocatore 1 si \u00E8 avvicinato di pi\u00F9");
    }
    else {
        console.log("Nessuno ha indovinato, ma il giocatore 2 si \u00E8 avvicinato di pi\u00F9");
    }
}
generazione();
