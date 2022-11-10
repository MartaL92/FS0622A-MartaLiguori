class Paginazione {
    constructor(_items = [], _pageSize = 10) {
        this.items = _items;
        this.pageSize = _pageSize;
        this.page = 1;
        this.maxPages = Math.ceil(this.items.length / this.pageSize);
    }

    btnNext() {
        var next = document.getElementById('btn_next');
        next.addEventListener('click', function () {
            if (this.page < this.maxPages) {
                this.page += 1
            } else {
                this.page = this.maxPages
            }
            this.stampa()
        })
    }

    btnPrev() {
        var prev = document.getElementById('btn_prev');
        prev.addEventListener('click', function () {
            if (this.page > 1) {
                this.page -= 1
            } else {
                this.page = 1
            }
            this.stampa()
        })
    }

    stampa() {
        var start = this.pageSize * (this.page - 1);
        var end = start + this.pageSize;
        tab = document.getElementById('datiTab');
        tab.innerHTML = '';
        for (i = start; i < end; i++) {
            this.append(this.items[i]);
        }
    }

    append(item){
        var tr = document.createElement("tr");
        var id = document.createElement("td");
        id.innerHTML = item.id;
        var nome = document.createElement("td");
        nome.innerHTML = item.nome;

        tr.append(id, nome);
        tab.appendChild(tr);
    }
}

var users = [
    {
        id: 1,
        nome: 'Mario'
    },
    {
        id: 2,
        nome: 'Claudio'
    },
    {
        id: 3,
        nome: 'Francesca'
    },
    {
        id: 4,
        nome: 'Giovanni'
    },
    {
        id: 5,
        nome: 'Stefania'
    },
    {
        id: 6,
        nome: 'Paola'
    },
    {
        id: 7,
        nome: 'Luigi'
    },
    {
        id: 8,
        nome: 'Davide'
    },
    {
        id: 9,
        nome: 'Anna'
    },
    {
        id: 10,
        nome: 'Roberta'
    }
]

var pag = new Paginazione(users, 5);
console.log(pag);










