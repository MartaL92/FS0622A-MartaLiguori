interface Telefono {
    credito: number;
    numeroChiamate: number;

    ricarica(soldi:number): number;
    chiamata(minuti:number): number;
    numero404(): string;
    getNumeroChiamate(): string;
    azzeraChiamate(): string;
}

class primoUtente implements Telefono {
    credito: number;
    numeroChiamate: number;

    constructor(_credito: number,_numeroChiamate: number) {
        this.credito=_credito;
        this.numeroChiamate=_numeroChiamate
    }

    ricarica(soldi:number){
        return this.credito = this.credito + (soldi);
    };

    chiamata(minuti:number){
        this.credito = this.credito - (minuti * 0.20);
        return this.numeroChiamate += 1;
    };

    numero404(): string{
        return `Credito residuo: € ${this.credito}`;
    };

    getNumeroChiamate(): string{
        return `Numero chiamate: ${this.numeroChiamate}`;
    };

    azzeraChiamate(){
        return `Chiamate azzerate: ${this.numeroChiamate = 0}`;
    };
}

class secondoUtente extends primoUtente {
    constructor(_credito: number,_numeroChiamate: number) {
        super(_credito,_numeroChiamate);
    }
}

class terzoUtente extends primoUtente {
    constructor(_credito: number,_numeroChiamate: number) {
        super(_credito,_numeroChiamate);
    }
}

let primo = new primoUtente(10, 0);
primo.ricarica(10);
primo.chiamata(5);
console.log("Primo utente");
console.log(primo.numero404());
console.log(primo.getNumeroChiamate());
console.log(primo.azzeraChiamate());

console.log("------------------");

let secondo = new secondoUtente(20, 1);
secondo.ricarica(5);
secondo.chiamata(10);
console.log("Secondo utente");
console.log(secondo.numero404());
console.log(secondo.getNumeroChiamate());
console.log(secondo.azzeraChiamate());

console.log("------------------");

let terzo = new terzoUtente(30, 2);
terzo.ricarica(15);
terzo.chiamata(15);
console.log("Terzo utente");
console.log(terzo.numero404());
console.log(terzo.getNumeroChiamate());
console.log(terzo.azzeraChiamate());

