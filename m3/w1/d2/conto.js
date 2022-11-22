// CLASSE FIGLIO
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
var SonAccount = /** @class */ (function () {
    function SonAccount(_balanceInit, _lista) {
        this.balanceInit = _balanceInit;
        this.lista = _lista;
    }
    SonAccount.prototype.oneDeposit = function (versamento) {
        var scrivi = this.lista;
        this.balanceInit += versamento;
        scrivi.innerHTML += "<li class='text-success'>+ \u20AC".concat(versamento, " : Saldo attuale = \u20AC ").concat(this.balanceInit, " </li>");
    };
    SonAccount.prototype.oneWithDraw = function (prelievo) {
        var scrivi = this.lista;
        this.balanceInit -= prelievo;
        scrivi.innerHTML += "<li class='text-warning'>- \u20AC".concat(prelievo, " : Saldo attuale = \u20AC ").concat(this.balanceInit, " </li>");
    };
    return SonAccount;
}());
// CLASSE MADRE
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balanceInit, _lista) {
        return _super.call(this, _balanceInit, _lista) || this;
    }
    MotherAccount.prototype.oneDeposit = function (versamento) {
        var scrivi = this.lista;
        this.balanceInit += versamento;
        this.balanceInit = this.balanceInit + (this.balanceInit * 0.10);
        scrivi.innerHTML += "<li class='text-success'>+ \u20AC".concat(versamento, " : Saldo attuale = \u20AC ").concat(this.balanceInit, " </li>");
    };
    MotherAccount.prototype.oneWithDraw = function (prelievo) {
        var scrivi = this.lista;
        this.balanceInit -= prelievo;
        this.balanceInit = this.balanceInit + (this.balanceInit * 0.10);
        scrivi.innerHTML += "<li class='text-warning'>- \u20AC".concat(prelievo, " : Saldo attuale = \u20AC ").concat(this.balanceInit, " </li>");
    };
    return MotherAccount;
}(SonAccount));
// ISTANZE
// Lista figlio
var operazioni1 = document.getElementById('operazioni1');
var son = new SonAccount(0, operazioni1);
var btnVersa = document.getElementById('versaSon');
btnVersa === null || btnVersa === void 0 ? void 0 : btnVersa.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputVersa = document.getElementById('versa1');
    var versa1 = Number(inputVersa.value);
    son.oneDeposit(versa1);
});
var btnPreleva = document.getElementById('prelevaSon');
btnPreleva === null || btnPreleva === void 0 ? void 0 : btnPreleva.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputPreleva = document.getElementById('preleva1');
    var preleva1 = Number(inputPreleva.value);
    son.oneWithDraw(preleva1);
});
// Lista madre
var operazioni2 = document.getElementById('operazioni2');
var mother = new MotherAccount(0, operazioni2);
var btnVersa2 = document.getElementById('versaMother');
btnVersa2 === null || btnVersa2 === void 0 ? void 0 : btnVersa2.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputVersa1 = document.getElementById('versa2');
    var versa2 = Number(inputVersa1.value);
    mother.oneDeposit(versa2);
});
var btnPreleva2 = document.getElementById('prelevaMother');
btnPreleva2 === null || btnPreleva2 === void 0 ? void 0 : btnPreleva2.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputPreleva1 = document.getElementById('preleva2');
    var preleva2 = Number(inputPreleva1.value);
    mother.oneWithDraw(preleva2);
});
