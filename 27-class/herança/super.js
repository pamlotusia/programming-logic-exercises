// Chamada da classe pai com super
// A palavra-chave (keyword) super é utilizada para chamar funções que pertencem ao pai do objeto.

class Felino {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`${this.nome} faça barulho.`)
  }
}

class Gato extends Felino {
  //aqui sobreescrevemos o metodo da classe pai Felino
  falar() {
    console.log(`${this.nome}, mia`)
  }
}
class Leao extends Felino {
  //aqui chamados o metodo da classe pai Felino e adicionamos mais lógica ao mesmo metodo
  falar() {
    super.falar() //logica do Felino
    console.log(`${this.nome} roars`) //logica adicional da subclasse
  }
}

let leao = new Leao('fuzzy')
leao.falar()

let gato = new Gato('boris')
gato.falar()
