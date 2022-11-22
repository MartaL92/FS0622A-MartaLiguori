abstract class Calcolo{
    redditoAnnuoLordo: number;
    tasseinps: number;
    tasseirpef: number;
    constructor(_redditoAnnuoLordo:number, _tasseinps: number, _tasseirpef: number){
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    abstract getUtileTasse():number;
    abstract getTasseInps():number;
    abstract getTasseIrpef():number;
    abstract getRedditoAnnuoNetto():number;
}

class Professionista extends Calcolo{
    codredd: number;
    constructor(_redditoAnnuoLordo:number, _tasseinps: number, _tasseirpef: number){
        super(_redditoAnnuoLordo, _tasseinps, _tasseirpef)
        this.codredd = 78;
    }
    getUtileTasse():number{
        return ((this.redditoAnnuoLordo * this.codredd)/ 100);
    }
    getTasseInps():number{
        return((this.getUtileTasse() * this.tasseinps)/ 100);
    }
    getTasseIrpef(): number {
        return((this.getUtileTasse() * this.tasseirpef)/ 100);
    }
    getRedditoAnnuoNetto(): number {
        return (this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()))
    }
}
class Artigiano extends Calcolo{
    codredd: number;
    constructor(_redditoAnnuoLordo:number, _tasseinps: number, _tasseirpef: number){
        super(_redditoAnnuoLordo, _tasseinps, _tasseirpef)
        this.codredd = 67;
    }
    getUtileTasse():number{
        return ((this.redditoAnnuoLordo * this.codredd)/ 100);
    }
    getTasseInps():number{
        return((this.getUtileTasse() * this.tasseinps)/ 100);
    }
    getTasseIrpef(): number {
        return((this.getUtileTasse() * this.tasseirpef)/ 100);
    }
    getRedditoAnnuoNetto(): number {
        return (this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()))
    }
}
class Commerciante extends Calcolo{
    codredd: number;
    constructor(_redditoAnnuoLordo:number, _tasseinps: number, _tasseirpef: number){
        super(_redditoAnnuoLordo, _tasseinps, _tasseirpef)
        this.codredd = 40;
    }
    getUtileTasse():number{
        return ((this.redditoAnnuoLordo * this.codredd)/ 100);
    }
    getTasseInps():number{
        return ((this.getUtileTasse() * this.tasseinps)/ 100);
    }
    getTasseIrpef(): number {
        return ((this.getUtileTasse() * this.tasseirpef)/ 100);
    }
    getRedditoAnnuoNetto(): number {
        return (this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()))
    }
}

var professionista =  new Professionista(40000, 50, 100);
console.log("utile tasse professionista: €", professionista.getUtileTasse());
console.log("tasse inps professionista: €", professionista.getTasseInps());
console.log("tasse irpef professionista: €", professionista.getTasseIrpef());
console.log("reddito annuo netto professionista: €", professionista.getRedditoAnnuoNetto());

console.log("----------------------------------------------------------------------------------");

var artigiano =  new Artigiano(40000, 50, 100);
console.log("utile tasse artigiano: €", artigiano.getUtileTasse());
console.log("tasse inps artigiano: €", artigiano.getTasseInps());
console.log("tasse irpef artigiano: €", artigiano.getTasseIrpef());
console.log("reddito annuo netto artigiano: €", artigiano.getRedditoAnnuoNetto());

console.log("----------------------------------------------------------------------------------");

var commerciante =  new Commerciante(40000, 50, 100);
console.log("utile tasse commerciante: €", commerciante.getUtileTasse());
console.log("tasse inps commerciante: €", commerciante.getTasseInps());
console.log("tasse irpef commerciante: €", commerciante.getTasseIrpef());
console.log("reddito annuo netto commerciante: €", commerciante.getRedditoAnnuoNetto());