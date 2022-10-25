var btn = document.getElementById('starter');
btn.addEventListener('click', function () {
    spesa();
})

function spesa() {
    var budget = document.getElementById('budgetiniziale').value;
    var tetto = document.getElementById('tetto').value;
    var counter = 0;
    while (budget > 0) {
        var rand = Math.random() * 100;
        var defRand = Math.round(rand);
        if (defRand > budget) {
            document.getElementById('conto').innerHTML += `<li>Acqusito di ${defRand}€ non effettuato, saldo rimanente di ${budget}€</li>`;
        } else {
            budget -= defRand;
            document.getElementById('conto').innerHTML += `<li>Acqusito di ${defRand}€ effettuato, saldo rimanente di ${budget}€</li>`
        }
        if (budget <= (document.getElementById('budgetiniziale').value / 2) && counter == 0) {
            document.getElementById('conto').innerHTML += `<h2>Sei a metà</h2>`;
            counter += 1;
        }
        if (budget <= tetto) {
            document.getElementById('conto').innerHTML += `<h2>Sei sotto la soglia dei ${tetto}€</h2>`;
            break;
        }
    }
}