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
var Calcolo = /** @class */ (function () {
    function Calcolo(_redditoAnnuoLordo, _tasseinps, _tasseirpef) {
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    return Calcolo;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_redditoAnnuoLordo, _tasseinps, _tasseirpef) {
        var _this = _super.call(this, _redditoAnnuoLordo, _tasseinps, _tasseirpef) || this;
        _this.codredd = 78;
        return _this;
    }
    Professionista.prototype.getUtileTasse = function () {
        return (this.redditoAnnuoLordo * this.codredd / 100);
    };
    Professionista.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseinps / 100);
    };
    Professionista.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    };
    Professionista.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return Professionista;
}(Calcolo));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_redditoAnnuoLordo, _tasseinps, _tasseirpef) {
        var _this = _super.call(this, _redditoAnnuoLordo, _tasseinps, _tasseirpef) || this;
        _this.codredd = 67;
        return _this;
    }
    Artigiano.prototype.getUtileTasse = function () {
        return (this.redditoAnnuoLordo * this.codredd / 100);
    };
    Artigiano.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseinps / 100);
    };
    Artigiano.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    };
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return Artigiano;
}(Calcolo));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_redditoAnnuoLordo, _tasseinps, _tasseirpef) {
        var _this = _super.call(this, _redditoAnnuoLordo, _tasseinps, _tasseirpef) || this;
        _this.codredd = 40;
        return _this;
    }
    Commerciante.prototype.getUtileTasse = function () {
        return (this.redditoAnnuoLordo * this.codredd / 100);
    };
    Commerciante.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseinps / 100);
    };
    Commerciante.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    };
    Commerciante.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return Commerciante;
}(Calcolo));
var newProfessionista = new Professionista(25000, 200, 300);
console.log("utile tasse professionista: €", newProfessionista.getUtileTasse());
console.log("tasse inps professionista: €", newProfessionista.getTasseInps());
console.log("tasse irpef professionista: €", newProfessionista.getTasseIrpef());
console.log("reddito annuo netto professionista: €", newProfessionista.getRedditoAnnuoNetto());
console.log("----------------------------------------------------------------------------------");
var newArtigiano = new Artigiano(25000, 200, 300);
console.log("utile tasse artigiano: €", newArtigiano.getUtileTasse());
console.log("tasse inps artigiano: €", newArtigiano.getTasseInps());
console.log("tasse irpef artigiano: €", newArtigiano.getTasseIrpef());
console.log("reddito annuo netto artigiano: €", newArtigiano.getRedditoAnnuoNetto());
console.log("----------------------------------------------------------------------------------");
var newCommerciante = new Commerciante(25000, 200, 300);
console.log("utile tasse commerciante: €", newCommerciante.getUtileTasse());
console.log("tasse inps commerciante: €", newCommerciante.getTasseInps());
console.log("tasse irpef commerciante: €", newCommerciante.getTasseIrpef());
console.log("reddito annuo netto commerciante: €", newCommerciante.getRedditoAnnuoNetto());
