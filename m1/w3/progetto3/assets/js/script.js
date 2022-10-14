function premiTasto(valore) {
   document.getElementById('video').value += valore;
}

function uguale() {
    document.getElementById('video2').value = eval(document.getElementById('video').value);
}

function elimina() {
    document.getElementById('video').value = '';
    document.getElementById('video2').value = '';
}

function cancella() {
    var meno = document.getElementById('video').value;
    document.getElementById('video').value = meno.substring(0, meno.length-1);
}
