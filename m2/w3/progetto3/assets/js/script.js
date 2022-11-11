var nome;
var cognome;
var addBtn;
var elencoHTML;
var errore;
var erroreElenco;
var attivo = true;
var i;
var elenco = [];

window.addEventListener('DOMContentLoaded', init);

function init() {
	nome = document.getElementById('nome');
	cognome = document.getElementById('cognome');
	addBtn = document.getElementById('scrivi');
	elencoHTML = document.getElementById('elenco');
	errore = document.getElementById('errore');
	erroreElenco = document.getElementById('erroreElenco');
	printData();
	eventHandler();
}


function printData() {
	fetch('http://localhost:3000/elenco')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco = data;
			if (elenco.length > 0) {
				errore.innerHTML = '';
				elencoHTML.innerHTML = '';
				elenco.map(function (element, index) {
					elencoHTML.innerHTML += `<li><button type="button" class="btn btn-danger me-1" onClick="elimina(${element.id})"><i class="bi bi-x"></i>
					</button><button type="button" id="mod" class="btn btn-warning me-1" onClick="modifica(${index})"><i class="bi bi-magic"></i></button>${element.nome} ${element.cognome}</li>`;
				});
			} else {
				erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
			}
		});
}

function eventHandler() {
	addBtn.addEventListener('click', function () {
		controlla();
	});
}

function controlla() {
	if (nome.value != '' && cognome.value != '') {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
		};
		if (attivo == true) {
			addData(data);
		} else { change(data) };
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

async function addData(data) {
	let response = await fetch('http://localhost:3000/elenco', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm()
}

function clearForm() {
	nome.value = '';
	cognome.value = '';
}

function elimina(id) {
	if (confirm('Sei sicuro?')) {
		canc(id)
	}
}

async function canc(id) {
	let response = await fetch('http://localhost:3000/elenco/' + id, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		}
	});
}

function modifica(index) {
	attivo = false;
	i = index;
	nome.value = elenco[index].nome;
	cognome.value = elenco[index].cognome;
}

async function change(data) {
	let response = await fetch('http://localhost:3000/elenco/' + elenco[i].id, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm()
}






