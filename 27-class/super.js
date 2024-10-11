// Chamada da classe pai com super
// A palavra-chave (keyword) super é utilizada para chamar funções que pertencem ao pai do objeto.

class Gato{
  constructor(nome){
    this.nome = nome
  }

  falar(){
    console.log(`${this.nome} faça barulho.`)
  }
}

class Leao extends Gato{
  falar(){
    super.falar()
    console.log(`${this.nome} roars`)
  }
}

let leao = new Leao('fuzzy')
leao.falar()
