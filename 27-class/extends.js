// Sub classes com o extends
// A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.
class Animal{
  constructor(nome){
    this.nome = nome
  }

  falar(){
    console.log(`${this.nome} emite um barulho`)
  }
}

class Cachorro extends Animal{
  falar(){
    console.log(`${this.nome} ladidos`)
  }
}

let cachorro = new Cachorro('mat')
cachorro.falar()