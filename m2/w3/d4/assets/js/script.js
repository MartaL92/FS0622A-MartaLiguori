var elenco = [];
var dati = document.getElementById('dati');

window.addEventListener('DOMContentLoaded', init);

function init() {
    stampa();
}

function stampa() {
    fetch('http://localhost:3000/todos').then((response) => {
        return response.json();
    }).then((data) => {
        elenco = data;
        elenco.map(function (element) {
            var tr = document.createElement('tr');
            var id = document.createElement('td');
            id.innerHTML = element.id;
            var title = document.createElement('td');
            title.innerHTML = element.title;
            var completed = document.createElement('td');
            if (element.completed == true) {
                completed.innerHTML = `<i class="bi bi-check-circle text-info"></i>`;
            } else {
                completed.innerHTML = `<i class="bi bi-x-circle text-danger"></i>`;
            }
            tr.append(id, title, completed);
            dati.appendChild(tr);
        })
    });
}

