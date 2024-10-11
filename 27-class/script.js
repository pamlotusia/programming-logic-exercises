// Uma maneira de definir uma classe é usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave class seguida pelo nome da classe (aqui "Square"). Só deve haver um constructor por classe

class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}

// Expressões de Classes
// Uma Expressão de Classe (class expression) é outra forma para definir classes. Expressões de Classes podem possuir nomes ou não (anônimas). O nome dado para uma expressão de classe é local ao corpo da classe.
//sem nome
let Rectangle = class {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}

//nomeada
let Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}

// Um construtor pode usar a palavra-chave super para chamar o construtor de uma classe pai.

