abstract class Lavoratore {
    nome: string;
    cognome: string;
    codredd: number;
    constructor(_nome: string, _cognome: string, _codredd: number) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.codredd = _codredd;
    }
}

class Pagatasse extends Lavoratore {
    reddito: number;
    tasseInps: number;
    tasseIrpef: number;
    constructor(_nome: string, _cognome: string, _codredd: number, _reddito: number, _tasseInps: number, _tasseIrpef: number) {
        super(_nome, _cognome, _codredd);
        this.reddito = _reddito;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    getUtileTasse(): number {
        return (this.reddito * this.codredd / 100)
    };
    getTasseInps(): number {
        return (this.getUtileTasse() * this.tasseInps / 100)
    };
    getTasseIrpef(): number {
        return (this.getUtileTasse() * this.tasseIrpef / 100)
    };
    getRedditoAnnuoNetto(): number {
        return (this.reddito - (this.tasseInps + this.tasseIrpef))
    }
}

let artigiano = new Pagatasse('Marta', 'Liguori', 77, 2000, 281, 230);
console.log(artigiano.getUtileTasse(), artigiano.getTasseInps(), artigiano.getTasseIrpef(), artigiano.getRedditoAnnuoNetto());
let professionista = new Pagatasse('Paola', 'Agosto', 78, 2500, 330, 240);
console.log(professionista.getUtileTasse(), professionista.getTasseInps(), professionista.getTasseIrpef(), professionista.getRedditoAnnuoNetto());
let commerciante = new Pagatasse('Stefano', 'Rossi', 40, 1800, 250, 230);
console.log(commerciante.getUtileTasse(), commerciante.getTasseInps(), commerciante.getTasseIrpef(), commerciante.getRedditoAnnuoNetto());