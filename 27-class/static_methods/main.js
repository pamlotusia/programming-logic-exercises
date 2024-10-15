/* Métodos estáticos
 A palavra-chave static define um método estático de uma classe. Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada, ou seja, pertencem a propria classe, nao ao objeto derivado da classe.

  # Quando usar:
    * variaveis de configuração
    * metodos utilitarios
 */ 

class Utils{
  //configuração do sistema, por isso estamos usando static
  static linguagemDoSistema = "PT-BR"

  static obterDataProximoMes(){
    let now = new Date()
    let date;

    if(now.getMonth() === 11){
                      //new Date (ano atual +1, mês zero (janeiro), dia atual) -> leitura dos parametros
      date = new Date(now.getFullYear() + 1, 0, now.getDate())
    } else{
      date = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())
    }

    return date.toLocaleDateString(this.linguagemDoSistema)
  }
}

//note que o metodo foi chamado atraves da propria classe, não de um objeto que instancia a classe. Pois o metodo static pertence a classe.
console.log(`A data de hoje no mês seguinte é ${Utils.obterDataProximoMes()}`)

// instancia da classe
let testeStatic = new Utils
console.log(`A data de hoje no mês seguinte é ${testeStatic.obterDataProximoMes()}`) //retorna um erro pois não é possivel chamar um metodo static atraves da instancia da classe ao qual ele pertence
