/*  Herança
  # Quando usar:
    * Quando tiver objetos com codigos semelhantes 
  # Quando não usar:
    * Não fazer herança com muitos níveis, pode deixar o codigo complexo
    * Projetos muito pequenos
  Todas as classes devem possuir apenas um constructor(). Se a subclasse possuir um constructor, é necessário primeiro chamar super(atributo) antes de usar a keyword "this" para referenciar as novas propriedades daquela subclasse.
 */

class Base{
  constructor(atributo){
    this.atributo = atributo
  }
}

class MinhaClase extends Base{
  constructor(atributo, texto){
    super(atributo)

    this.texto = texto
  }

}

/* EXEMPLO */
class Pessoa{
  constructor(nome, telefone, email){
    this.nome = nome,
    this.telefone = telefone,
    this.email = email
  }

  falar(){
    console.log(`${this.nome} está falando.`)
  }
  andar(){
    console.log(`${this.nome} está andando.`)
  }
}

class PessoaFisica extends Pessoa{
  constructor(nome, telefone, email, cpf){
    super(nome, telefone, email)

    this.cpf = cpf
  }
}

class PessoaJuridica extends Pessoa{
  constructor(nome, telefone, email, cnpj){
    super(nome, telefone, email)

    this.cnpj = cnpj
  }

  pagarSalarios(){
    console.log(`${this.nome} pagou os funcionários`)
  }
}

let thiago = new PessoaFisica('thiago', 11984097584, 'thiago@gmail.com', 532669758)
thiago.andar()
let patrao = new PessoaJuridica('mateus', 1193467526, 'mateus@gmail.com', 532976345)
patrao.pagarSalarios()