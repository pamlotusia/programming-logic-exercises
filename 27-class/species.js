// Species
// Você pode querer retornar um objeto Array na sua classe MinhaArray derivada de array. O padrão Species permite a sobrescrita do construtor padrão.

// Por exemplo, quando utilizando um método como map() que retorna o construtor padrão, você pode querer que esse método retorne um objeto Array ao invés do objeto MinhaArray. O Symbol.species te permite fazer isso:

class MinhaArray extends Array{
  //sobrescreve species para o construtor da classe pai array
  static get[Symbol.species](){
    return Array
  }
}

let a = new MinhaArray(1,2,3)
let mapped = a.map((x)=> x * x)

console.log(mapped instanceof MinhaArray)
console.log(mapped instanceof Array)