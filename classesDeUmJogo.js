
class personagem {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {

        let ataque = "";

        if (this.tipo === "Mago") {
            ataque = "Magia";

        } else if (this.tipo === "Elfo") {
            ataque = "Arco e Flecha";

        } else if (this.tipo === "Humano") {
            ataque = "Espada";

        } else {
            console.log("Tipo de personagem inválido");
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}



let personagem1 = new personagem("Gandalf", 2019, "Mago");
let personagem2 = new personagem("Legolas", 2931, "Elfo");
let personagem3 = new personagem("Aragorn", 87, "Humano");

personagem1.atacar();
personagem2.atacar();
personagem3.atacar();







