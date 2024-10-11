// Mix-ins
// Subclasses abstratas ou mix-ins são templates para classes. Uma classe do ECMAScript pode apenas ter uma classe pai, assim sendo, não é possível a classe ter herança múltipla.

// Para se ter um comportamento similar ao de herança múltipla no ECMAScript usa-se mix-ins, uma forma de implementar mix-ins é usar um template de subclasse que é uma função que instancia uma classe base e retorna uma subclasse extendida desta classe base:

class Humano{
  constructor(nome){
    this.nome = nome
  }

  andar(){
    return this.nome + ' andou um passo';
  }
}

const HumanoFalante = (Base) => 
  class extends Base {
    falar(){
      return this.nome + ' diz: olá mundo!'
    }
  }

const HumanoFalanteMixado = (Base) => class extends Base {};

const HumanoFinal = HumanoFalanteMixado(HumanoFalante(Humano))

const humano = new HumanoFinal('bill gates')

console.log(humano.andar())
console.log(humano.falar())