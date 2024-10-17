class Utils{
  static configLinguagem = 'pt-br'
  static configTime = {
    hour: '2-digit',
    minute: '2-digit'
  }

  static getFormateDate(){
    let date = new Date()
    return date.toLocaleDateString(this.configLinguagem, this.configTime)
  }
}

class Conta{
  constructor(nome, numero, saldo){
    this.nome = nome,
    this.numero = numero,
    this.saldo = saldo
    this.extrato = []
  }

  get exibirExtrato(){
    console.log('------EXTRATO DA CONTA------')
    this.extrato.forEach(item => {
      console.log(item)
    })
    console.log('-----FIM DO EXTRATO------')
  }
  registrarExtrato(item){
    this.extrato.push(item)
  }
}

class ContaPoupanca extends Conta{
  #taxaDeSaque = 0.10

  saque(valor){
    let taxaDeSaqueDoValor = valor * this.#taxaDeSaque
    let valorDeSaqueComTaxa = valor + taxaDeSaqueDoValor

    if(valorDeSaqueComTaxa > this.saldo){
      throw new Error( 'Saldo insuficiente.')
    }

    this.saldo = this.saldo - valorDeSaqueComTaxa
    this.registrarExtrato(`${Utils.getFormateDate()} - Saque de ${valor} - Saldo de ${this.saldo}`)
    console.log(`O saldo atual após o saque é de: ${this.saldo}`)
  }
  deposito(valor){
    this.saldo+= valor
    this.registrarExtrato(`${Utils.getFormateDate()} - Deposito de ${valor} - Saldo de ${this.saldo}`)
  }
}

let novaContaPoupanca = new ContaPoupanca('TESTE', 123, 1000)
novaContaPoupanca.saque(100)
novaContaPoupanca.exibirExtrato
novaContaPoupanca.deposito(200)
novaContaPoupanca.exibirExtrato