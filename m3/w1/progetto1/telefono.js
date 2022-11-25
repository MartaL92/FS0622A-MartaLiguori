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
var primoUtente = /** @class */ (function () {
    function primoUtente(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    primoUtente.prototype.ricarica = function (soldi) {
        return this.credito = this.credito + (soldi);
    };
    ;
    primoUtente.prototype.chiamata = function (minuti) {
        this.credito = this.credito - (minuti * 0.20);
        return this.numeroChiamate += 1;
    };
    ;
    primoUtente.prototype.numero404 = function () {
        return "Credito residuo: \u20AC ".concat(this.credito);
    };
    ;
    primoUtente.prototype.getNumeroChiamate = function () {
        return "Numero chiamate: ".concat(this.numeroChiamate);
    };
    ;
    primoUtente.prototype.azzeraChiamate = function () {
        return "Chiamate azzerate: ".concat(this.numeroChiamate = 0);
    };
    ;
    return primoUtente;
}());
var secondoUtente = /** @class */ (function (_super) {
    __extends(secondoUtente, _super);
    function secondoUtente(_credito, _numeroChiamate) {
        return _super.call(this, _credito, _numeroChiamate) || this;
    }
    return secondoUtente;
}(primoUtente));
var terzoUtente = /** @class */ (function (_super) {
    __extends(terzoUtente, _super);
    function terzoUtente(_credito, _numeroChiamate) {
        return _super.call(this, _credito, _numeroChiamate) || this;
    }
    return terzoUtente;
}(primoUtente));
var primo = new primoUtente(10, 0);
primo.ricarica(10);
primo.chiamata(5);
console.log("Primo utente");
console.log(primo.numero404());
console.log(primo.getNumeroChiamate());
console.log(primo.azzeraChiamate());
console.log("------------------");
var secondo = new secondoUtente(20, 1);
secondo.ricarica(5);
secondo.chiamata(10);
console.log("Secondo utente");
console.log(secondo.numero404());
console.log(secondo.getNumeroChiamate());
console.log(secondo.azzeraChiamate());
console.log("------------------");
var terzo = new terzoUtente(30, 2);
terzo.ricarica(15);
terzo.chiamata(15);
console.log("Terzo utente");
console.log(terzo.numero404());
console.log(terzo.getNumeroChiamate());
console.log(terzo.azzeraChiamate());
