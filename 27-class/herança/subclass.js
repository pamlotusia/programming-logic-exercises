// Se existir um contrutor nas subclasses, é necessário primeiro chamar super() antes de usar a keyword "this".
// Também é possivel ampliar (extends) "classes" baseadas em funções tradicionais.

function Animal(nome){
  this.nome = nome
}

Animal.prototype.falar = function(){
  console.log(this.nome + 'faça um barulho')
}

class Cachorro extends Animal {
  falar(){
    console.log(`${this.nome} late`)
  }
}

class Gato extends Animal{
  constructor(nome, barulho){
    super(nome)

    this.barulho = barulho
  }

  falar(){
    console.log(`${this.nome} faz ${this.barulho}`)
  }
}

let cachorro = new Cachorro('miky')
cachorro.falar()
let gato = new Gato('chico', 'miau')
gato.falar()