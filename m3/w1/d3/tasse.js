var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_nome, _cognome, _codredd) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.codredd = _codredd;
    }
    return Lavoratore;
}());
var Pagatasse = /** @class */ (function (_super) {
    __extends(Pagatasse, _super);
    function Pagatasse(_nome, _cognome, _codredd, _reddito, _tasseInps, _tasseIrpef) {
        var _this = _super.call(this, _nome, _cognome, _codredd) || this;
        _this.reddito = _reddito;
        _this.tasseInps = _tasseInps;
        _this.tasseIrpef = _tasseIrpef;
        return _this;
    }
    Pagatasse.prototype.getUtileTasse = function () {
        return (this.reddito * this.codredd / 100);
    };
    ;
    Pagatasse.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseInps / 100);
    };
    ;
    Pagatasse.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseIrpef / 100);
    };
    ;
    Pagatasse.prototype.getRedditoAnnuoNetto = function () {
        return (this.reddito - (this.tasseInps + this.tasseIrpef));
    };
    return Pagatasse;
}(Lavoratore));
var artigiano = new Pagatasse('Marta', 'Liguori', 77, 2000, 281, 230);
console.log(artigiano.getUtileTasse(), artigiano.getTasseInps(), artigiano.getTasseIrpef(), artigiano.getRedditoAnnuoNetto());
var professionista = new Pagatasse('Paola', 'Agosto', 78, 2500, 330, 240);
console.log(professionista.getUtileTasse(), professionista.getTasseInps(), professionista.getTasseIrpef(), professionista.getRedditoAnnuoNetto());
var commerciante = new Pagatasse('Stefano', 'Rossi', 40, 1800, 250, 230);
console.log(commerciante.getUtileTasse(), commerciante.getTasseInps(), commerciante.getTasseIrpef(), commerciante.getRedditoAnnuoNetto());
