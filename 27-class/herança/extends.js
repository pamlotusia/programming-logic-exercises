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
  //aqui extendemos a classe Animal e sobreescrevemos seu metodo.
  falar(){
    console.log(`${this.nome} late.`)
  }
}

let cachorro = new Cachorro('mat')
cachorro.falar()