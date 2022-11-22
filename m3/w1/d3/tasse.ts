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
        return (this.redditoAnnuoLordo * this.codredd/ 100);
    }
    getTasseInps():number{
        return(this.getUtileTasse() * this.tasseinps/ 100);
    }
    getTasseIrpef(): number {
        return(this.getUtileTasse() * this.tasseirpef/ 100);
    }
    getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
    }
}
class Artigiano extends Calcolo{
    codredd: number;
    constructor(_redditoAnnuoLordo:number, _tasseinps: number, _tasseirpef: number){
        super(_redditoAnnuoLordo, _tasseinps, _tasseirpef)
        this.codredd = 67;
    }
    getUtileTasse():number{
        return (this.redditoAnnuoLordo * this.codredd/ 100);
    }
    getTasseInps():number{
        return(this.getUtileTasse() * this.tasseinps/ 100);
    }
    getTasseIrpef(): number {
        return(this.getUtileTasse() * this.tasseirpef/ 100);
    }
    getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
    }
}
class Commerciante extends Calcolo{
    codredd: number;
    constructor(_redditoAnnuoLordo:number, _tasseinps: number, _tasseirpef: number){
        super(_redditoAnnuoLordo, _tasseinps, _tasseirpef)
        this.codredd = 40;
    }
    getUtileTasse():number{
        return (this.redditoAnnuoLordo * this.codredd/ 100);
    }
    getTasseInps():number{
        return(this.getUtileTasse() * this.tasseinps/ 100);
    }
    getTasseIrpef(): number {
        return(this.getUtileTasse() * this.tasseirpef/ 100);
    }
    getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
    }
}

var newProfessionista:any =  new Professionista(25000, 200, 300);
console.log("utile tasse professionista: €", newProfessionista.getUtileTasse());
console.log("tasse inps professionista: €", newProfessionista.getTasseInps());
console.log("tasse irpef professionista: €", newProfessionista.getTasseIrpef());
console.log("reddito annuo netto professionista: €", newProfessionista.getRedditoAnnuoNetto());

console.log("----------------------------------------------------------------------------------");

var newArtigiano:any =  new Artigiano(25000, 200, 300);
console.log("utile tasse artigiano: €", newArtigiano.getUtileTasse());
console.log("tasse inps artigiano: €", newArtigiano.getTasseInps());
console.log("tasse irpef artigiano: €", newArtigiano.getTasseIrpef());
console.log("reddito annuo netto artigiano: €", newArtigiano.getRedditoAnnuoNetto());

console.log("----------------------------------------------------------------------------------");

var newCommerciante:any =  new Commerciante(25000, 200, 300);
console.log("utile tasse commerciante: €", newCommerciante.getUtileTasse());
console.log("tasse inps commerciante: €", newCommerciante.getTasseInps());
console.log("tasse irpef commerciante: €", newCommerciante.getTasseIrpef());
console.log("reddito annuo netto commerciante: €", newCommerciante.getRedditoAnnuoNetto());