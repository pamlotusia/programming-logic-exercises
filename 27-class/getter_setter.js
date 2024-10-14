/* Getter
O get é utilizado para retornar valores de forma dinamica, ou seja, podemos retornar o dado já tratado, seja com parseInt(), uppercase() ou alguma função de regexep declarada na propria classe, etc. Podemos devolver ele pronto pra uso.
Apesar do get vir antes do nome de uma função, ele retorna um valor, entao quando acessarmos ele depois com a classe já instanciada em um objeto, nao usamos as aspas (), usamos apenas o nome da função que acompanha o get, como se estivessemos acessando um atributo.

# Alguns pontos importantes a serem destacados para o uso de getters são:
  * Pode ter um identificador do tipo numérico ou string.
  * Não deve ter *nenhum parâmetro.*
  * Não pode ser utilizado mais de um getter para uma mesma propriedade, assim como não pode haver uma propriedade comum com o mesmo nome do getter.

O getter, com a sintaxe get é associado a uma função que será chamada quando a propriedade em questão for acessada e solicitada de forma dinâmica. É possível utilizá-la para retornar o status de uma variável interna, sem utilizar métodos de forma explícita. Da seguinte forma:
 */

class Curso {
  constructor(materia, professor, duracao) {
    ;(this.materia = materia),
      (this.professor = professor),
      (this.duracao = duracao)
  }

  get prof() {
    return this.professor
  }
}

let poo = new Curso('Programação orientada a objetos', 'Rafaela', '1 semestre')
console.log(poo.prof)

/*Nesse exemplo apenas utilizamos o getter para retornar um valor que já havia sido declarado de forma fixa. E se quisermos agora retornar um valor dinâmico, como uma média de outras propriedades? Podemos fazer da seguinte forma:
 */

class Boletim {
  constructor(participacao, prova, trabalho) {
    ;(this.participacao = participacao),
      (this.prova = prova),
      (this.trabalho = trabalho)
  }

  get media() {
    //tratamento do dado sendo feito e retornado de forma direta pelo get()
    return parseInt((this.participacao + this.prova + this.trabalho) / 3)
  }
}

let boletimSemestral = new Boletim(8, 6, 7.5)
console.log(boletimSemestral.media)

/*  Setter
  Geralmente usados junto com os getters, os setters são utilizados para definirem valores para uma propriedade específica.

  # Alguns pontos importantes a serem destacados para o uso de setters são:
    * Pode ter um identificador do tipo numérico ou string.
    * Deve ter exatamente um parâmetro.
    * Não pode ter a mesma nomenclatura para propriedade e função.
 */

class Aluno {
  constructor(nome, curso, semestre) {
    ;(this.nome = nome), (this.curso = curso), (this.semestre = semestre)
  }

  set nomeAluno(nomeAluno) {
    this.nome = nomeAluno
  }
}

let lucas = new Aluno('', 'engenharia', 5)
console.log(lucas) // Aluno { nome: '', curso: 'engenharia', semestre: 5 }
lucas.nomeAluno = 'Lucas'
console.log(lucas.nome) //Lucas

/* Agora podemos tanto acessar as propriedades de um objeto (com getters), quanto alterar os valores dela (com setters). */
class Pessoa {
  nome;

  get username() {
    return this.nome
  }

  set setNome(nome) {
    if (!nome) {
      throw new Error('O nome não pode ser vazio')
    }
    if (this.verificaCaracteresEspeciais(nome)) {
      throw new Error('O nome não pode conter caracteres especiais.')
    }
    this.nome = nome
  }

  verificaCaracteresEspeciais(string) {
    const regex = /[@!#$%^&()/\\]/
    return regex.test(string)
  }

}

let pessoa = new Pessoa()
console.log(pessoa.username) //undefield
// para passar um parametro ao set tambem tratamos ele como um atributo, entao usamos o sinal de igual = para atribuir valor
pessoa.setNome = 'Bia Andrade'
console.log(pessoa.username) //Bia
