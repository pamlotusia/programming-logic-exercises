// Note que classes não extendem objetos normais (não construíveis). Se você quer herdar de um objeto, é necessário utilizar Object.setPrototypeOf():

//objeto normal
let Animal = {
  falar(){
    console.log(`${this.nome} faça barulho`)
  }
}

class Cachorro{
  constructor(nome){
    this.nome = nome
  }
}

Object.setPrototypeOf(Cachorro.prototype, Animal)

let cachorro = new Cachorro('luiz')
cachorro.falar()