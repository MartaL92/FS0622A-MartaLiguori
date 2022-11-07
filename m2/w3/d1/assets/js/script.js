var btnVai = document.getElementById('vai');

var tab = document.getElementById('tab');

var arrayDatiTab = [];

function datiTab(_nome, _cognome, _nascita) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.nascita = _nascita;
    this.eta = function () {
        var dataNascita = new Date(this.nascita);
        var oggi = new Date();
        return (oggi.getFullYear() - dataNascita.getFullYear());
    }
}

btnVai.addEventListener('submit', function () {
    var myNome = document.getElementById('nome').value;
    var myCognome = document.getElementById('cognome').value;
    var myNascita = document.getElementById('nascita').value;

    var newDatiTab = new datiTab(myNome, myCognome, myNascita);

    arrayDatiTab.push(newDatiTab);

    tab.innerHTML = '';

    arrayDatiTab.forEach((dati) => {
        var riga = document.createElement('tr');
        riga.innerHTML = `<td>${dati.nome}</td><td>${dati.cognome}</td><td>${dati.eta()} anni</td>`;
        tab.appendChild(riga);

        var btnDel = document.createElement('button');
        btnDel.className = 'btn btn-info';
        btnDel.innerHTML = 'X';
        riga.appendChild(btnDel);

        btnDel.addEventListener('click', function () {
            var del = this.parentElement;
            del.style.display = "none";
        })
    })
})