//Es. 1
var stringa = 'Sto imparando JavaScript';

var maiusc = stringa.toUpperCase();
document.getElementById('maiuscola').innerHTML = maiusc;

var minusc = stringa.toLowerCase();
document.getElementById('minuscola').innerHTML = minusc;

var array = stringa.split('');
document.getElementById('strArray').innerHTML = array;

var caratteri = stringa.charAt(2) + stringa.charAt(1) + stringa.charAt(14) + stringa.charAt(18);
document.getElementById('estraiCaratteri').innerHTML = caratteri;

var conc = stringa.concat(' JS');
document.getElementById('concatena').innerHTML = conc;

var estrai = stringa.slice(5,9);
document.getElementById('estraiStringa').innerHTML = estrai;

//Es. 2
var array1 = ['Giovanni', 'Carla', 'Piero', 'Mirtilla'];
document.getElementById('array').innerHTML = array1;

var lungh = array1.length;
document.getElementById('lunghezza').innerHTML = lungh;

var el = array1.slice(2,3);
document.getElementById('elemento').innerHTML = el;

var last = array1[3];
document.getElementById('ultimo').innerHTML = last;

var mod = array1.splice(2,1,'Massimo');
document.getElementById('modificato').innerHTML = array1;

//Es. 3
var arrayAnno = [2001,1990,1987,2018,2010];

function calcolaEta(arrayAnno, i) {
    var anno = 2022;
    var eta = anno - arrayAnno[i];
    return eta;
}

document.getElementById('eta1').innerHTML += `${calcolaEta(arrayAnno, 0)} anni`;
document.getElementById('eta2').innerHTML += `${calcolaEta(arrayAnno, 1)} anni`;
document.getElementById('eta3').innerHTML += `${calcolaEta(arrayAnno, 2)} anni`;
document.getElementById('eta4').innerHTML += `${calcolaEta(arrayAnno, 3)} anni`;
document.getElementById('eta5').innerHTML += `${calcolaEta(arrayAnno, 4)} anni`;

var arrayEta = [calcolaEta(arrayAnno, 0), calcolaEta(arrayAnno, 1), calcolaEta(arrayAnno, 2), calcolaEta(arrayAnno, 3), calcolaEta(arrayAnno, 4)];
document.getElementById('arrayEta').innerHTML += arrayEta;

//Es. 4
var array2 = ['coniglio', 'cane', 'gatto', 'criceto'];
document.getElementById('intero').innerHTML = array2;

var agg = array2.push('leone');
document.getElementById('aggiunto').innerHTML = array2;

var togli = array2.pop();
document.getElementById('estratto').innerHTML = array2;

var ver = array2.includes('coniglio');
document.getElementById('verifica1').innerHTML = ver;

var ver2 = array2.includes('leone');
document.getElementById('verifica2').innerHTML = ver2;