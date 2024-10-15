/*  Atributos e metodos privados de classes

  # Quando usar:
    * Quando precisar que nenhuma outra classe interfira em um bloco

  # Como utilizar:
    * basta adicionar o sinal de # a frente do metodo
*/

class Imposto{
  constructor(nome, salario){
    this.nome = nome,
    this.salario = salario
  }

  //atributo privado
  #porcentagemImposto = 0.20

  //metodo privado
  #calcularImposto(){
    return this.salario * this.#porcentagemImposto;
  }

  obterSalarioLiquido(){
    return this.salario - this.#calcularImposto()
  }
}

let pessoa1 = new Imposto('joao', 1000)
console.log(`${pessoa1.nome} ganha ${pessoa1.obterSalarioLiquido()} reais`)