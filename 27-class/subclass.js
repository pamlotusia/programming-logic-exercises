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

let cachorro = new Cachorro('miky')
cachorro.falar()