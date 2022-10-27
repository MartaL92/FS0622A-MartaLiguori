// MENU

var btnAprimenu = document.querySelector('#menu');
var menu = document.querySelector('.menucontainer');

var menuList = document.querySelectorAll('.menuli');

for (var i=0; i<menuList.length; i++){
    menuList[i].addEventListener('mouseover', function(){
        this.style.backgroundColor = 'gray';
    }),

    menuList[i].addEventListener('mouseout', function(){
        this.style.backgroundColor = 'rgb(168, 121, 222)';
    });
}

btnAprimenu.addEventListener('click', function () {
    menu.classList.toggle('menucontainerOpen');
})

btnAprimenu.addEventListener('mouseover', function () {
    btnAprimenu.style.backgroundColor = 'green';
})

btnAprimenu.addEventListener('mouseout', function () {
    btnAprimenu.style.backgroundColor = 'blue';
})


// TESTO

var testo = document.querySelector('#testo');

document.querySelector('#grande').addEventListener('click', function () {
    testo.classList.toggle('big');
})

document.querySelector('#colore').addEventListener('click', function () {
    testo.classList.toggle('color');
})

document.querySelector('#maiuscolo').addEventListener('click', function () {
    testo.classList.toggle('maiusc');
})

document.querySelector('#nascondi').addEventListener('click', function () {
    testo.className = ' hide';
})

document.querySelector('#mostra').addEventListener('click', function () {
    testo.className = ' show';
})


// LISTA

var listaIt = document.querySelectorAll('.itemli');

for (var i=0; i<listaIt.length; i++){
    listaIt[i].addEventListener('click', function(){
        this.classList.toggle('barrato');
    });
}

