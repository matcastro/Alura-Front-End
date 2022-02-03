class Cliente {
    nome
    cpf
}

class ContaCorrente{
    agencia
    _saldo = 0

    sacar(valor) {
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
        return 0
    }

    depositar(valor) {
        if(valor <= 0){
            return
        }
        this._saldo += valor
    }
}

const cliente1 = new Cliente()
cliente1.nome = "Mateus"
cliente1.cpf = 12345678910


const cliente2 = new Cliente()
cliente2.nome = "Pessoa2"
cliente2.cpf = 10987654321

const contaCorrenteMateus = new ContaCorrente()
contaCorrenteMateus.agencia = 1001

contaCorrenteMateus.depositar(100)
const valorSacado = contaCorrenteMateus.sacar(50)
console.log(valorSacado)
console.log(contaCorrenteMateus)