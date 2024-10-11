// Métodos estáticos
// A palavra-chave static define um método estático de uma classe. Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada, ou seja, pertencem a propria classe, nao ao objeto derivado da classe. Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação.

class Ponto{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  static distancia(a,b){
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    console.log(a,  a.x)
    return Math.hypot(dx, dy)
  }
}

const p1 = new Ponto(5,5) 
const p2 = new Ponto(10,10)

console.log(p1.distancia) //undefield
console.log(p2.distancia) //undefield

console.log(Ponto.distancia(p1, p2))

// Empacotando com protótipos e métodos estáticos
// Quando um método estático ou protótipo é chamado sem um objeto "this" configurado (ou com "this" como boolean, string, number, undefined ou null), então o valor "this" será undefined dentro da função chamada. Autoboxing não vai acontecer. O comportamento será o mesmo se escrevemos o código no modo não-estrito.
 /* class Animal{
  falar(){
    return this
  }
  static comer(){
    return this
  }
}

let obj = new Animal()
console.log(obj.falar()) //Animal {}

let falar =obj.falar
console.log(falar)

console.log(Animal.comer()) //class Animal
let comer = Animal.comer
console.log(comer) */

//Se escrevemos o código acima usando classes baseadas em função tradicional, então o autoboxing(dados primitivos transformam-se em objetos) acontecerá com base no valor de "this" para o qual a função foi chamada.

function Animal(){}

Animal.prototype.falar = function(){
  return this
}

Animal.comer = function(){
  return this
}

let obj = new Animal()
let falar = obj.falar
console.log(falar())

let comer = Animal.comer
console.log(comer())