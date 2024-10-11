// Propriedades de instância
// Propriedades de instâncias devem ser definidas dentro dos métodos da classe:
class Retangulo{
  constructor(altura, largura){
    this.altura = altura;
    this.largura = largura
  }
}

//Propriedades de dados estáticos e propriedades de dados prototipados (prototype) devem ser definidos fora da declaração do corpo da classe.
Retangulo.larguraEstatico = 20;
Retangulo.prototype.larguraPrototipagem = 25;