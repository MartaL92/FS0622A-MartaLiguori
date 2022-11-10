class Person {
    constructor (_nome, _eta) {
        this.nome = _nome;
        this.eta = _eta;
    }

    confronto(altraPersona) {
        if (this.eta < altraPersona.eta) {
            console.log (`${this.nome} è più giovane di ${altraPersona.nome}`)
        } else {
            console.log (`${this.nome} è più vecchio di ${altraPersona.nome}`)
        }
    }
}

var p1 = new Person ('Mario', 30);
var p2 = new Person ('Claudio', 25);
var p3 = new Person ('Stefano', 35);

p1.confronto(p2);
p1.confronto(p3);
p2.confronto(p3);
