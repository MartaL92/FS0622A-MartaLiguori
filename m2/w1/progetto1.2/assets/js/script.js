var btn = document.getElementById('button');

btn.addEventListener('click', function () {
    var compito = document.getElementById('compito').value;
    var descrizione = document.getElementById('descrizione').value;
    var testo = compito + ' : ' + descrizione;
    var list = document.getElementById('list');

    var li = document.createElement('li');
    var textLi = document.createTextNode(testo);
    list.appendChild(li);
    li.appendChild(textLi);

    // Button Fatto per deselezionare un elemento della lista 

    var fatto = document.createElement('button');
    fatto.className = 'btnFatto';
    var vi = document.createTextNode('V');
    fatto.appendChild(vi);
    li.appendChild(fatto);

    fatto.addEventListener('click', function () {
        var okList = this.parentElement;
        okList.classList.toggle('toggleFatto');
    })

    // Button Elimina per eliminare un elemento della lista 

    var elimina = document.createElement('button');
    elimina.className = 'btnElimina';
    var ics = document.createTextNode('X');
    elimina.appendChild(ics);
    li.appendChild(elimina);

    elimina.addEventListener('click', function () {
        var noList = this.parentElement;
        noList.style.display = "none";
    })
})






