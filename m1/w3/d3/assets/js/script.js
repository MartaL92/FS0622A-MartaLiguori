//es 1
function frutta (mele, arance) {
    var succo = `Succo con ${mele} mele e ${arance} arance`;
    return succo;
    }

document.getElementById('corretta').innerHTML = frutta (4, 5);
document.getElementById('sbagliata').innerHTML = frutta (6, );

//es 2
function calcolaEta (anno, annoNascita) {
    var eta = `${anno - annoNascita} anni`;
    return eta;
}

document.getElementById('eta').innerHTML += calcolaEta (2022, 1992);

//es 3
var anno = 2022;

annoNascita = (nome, anno, eta1) => {
    var nascita = `L'anno di nascita di ${nome} è il ${anno - eta1}`;
    return nascita;
}

document.getElementById('persona1').innerHTML = annoNascita ('Anna', anno, 30);
document.getElementById('persona1').innerHTML = annoNascita ('Maria', anno, 24);

//es4
function torta () {
    var fetteM = 9;
    var fetteA = 15;
    function fette (value1, value2) {
        let frase = `Torta con ${value1} fette di mele e ${value2} fette di arance`;
        return frase
    }
    document.getElementById('torta').innerHTML = fette (fetteM, fetteA);
}

torta ();

//es5
var btn = document.getElementById('calcola');

btn.addEventListener('click', function () {
    let cibo = document.getElementById('cibo').value;
    let detersivi = document.getElementById('detersivi').value;
    let abiti = document.getElementById('abiti').value;
    document.getElementById('totale').innerHTML += Number(cibo) + Number(detersivi) + Number(abiti);
    cancellaForm();
})

function cancellaForm() {
    document.getElementById('cibo').value = '';
    document.getElementById('detersivi').value = '';
    document.getElementById('abiti').value = '';
}
