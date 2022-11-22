// CLASSE FIGLIO

class SonAccount {
    balanceInit: number;
    lista: HTMLElement;

    constructor(_balanceInit: number, _lista: HTMLElement) {
        this.balanceInit = _balanceInit;
        this.lista = _lista;
    }

    oneDeposit(versamento: number) {
        let scrivi = this.lista!;
        this.balanceInit += versamento;
        scrivi.innerHTML += `<li class='text-success'>+ €${versamento} : Saldo attuale = € ${this.balanceInit} </li>`;
    }

    oneWithDraw(prelievo: number) {
        let scrivi = this.lista!;
        this.balanceInit -= prelievo;
        scrivi.innerHTML += `<li class='text-warning'>- €${prelievo} : Saldo attuale = € ${this.balanceInit} </li>`;
    }
}

// CLASSE MADRE

class MotherAccount extends SonAccount {
    constructor(_balanceInit:number, _lista: HTMLElement){
        super(_balanceInit, _lista);
    }

    oneDeposit(versamento: number) {
        let scrivi = this.lista!;
        this.balanceInit += versamento;
        this.balanceInit = this.balanceInit + (this.balanceInit * 0.10);
        scrivi.innerHTML += `<li class='text-success'>+ €${versamento} : Saldo attuale = € ${this.balanceInit} </li>`;
    }

    oneWithDraw(prelievo: number) {
        let scrivi = this.lista!;
        this.balanceInit -= prelievo;
        this.balanceInit = this.balanceInit + (this.balanceInit * 0.10)
        scrivi.innerHTML += `<li class='text-warning'>- €${prelievo} : Saldo attuale = € ${this.balanceInit} </li>`;
    }

}


// ISTANZE

// Lista figlio

let operazioni1 = document.getElementById('operazioni1')!;
let son = new SonAccount(0, operazioni1);

let btnVersa = document.getElementById('versaSon');
btnVersa?.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputVersa = document.getElementById('versa1') as HTMLInputElement;
    let versa1 = Number(inputVersa.value);
    son.oneDeposit(versa1);
})

let btnPreleva = document.getElementById('prelevaSon');
btnPreleva?.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputPreleva = document.getElementById('preleva1') as HTMLInputElement;
    let preleva1 = Number(inputPreleva.value);
    son.oneWithDraw(preleva1);
})

// Lista madre

let operazioni2 = document.getElementById('operazioni2')!;
let mother = new MotherAccount(0, operazioni2);

let btnVersa2 = document.getElementById('versaMother');
btnVersa2?.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputVersa1 = document.getElementById('versa2') as HTMLInputElement;
    let versa2 = Number(inputVersa1.value);
    mother.oneDeposit(versa2);
})

let btnPreleva2 = document.getElementById('prelevaMother');
btnPreleva2?.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputPreleva1 = document.getElementById('preleva2') as HTMLInputElement;
    let preleva2 = Number(inputPreleva1.value);
    mother.oneWithDraw(preleva2);
})