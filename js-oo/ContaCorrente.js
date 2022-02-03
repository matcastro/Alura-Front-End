import { Cliente } from "./Cliente.js"
export class ContaCorrente{
    static numeroDeContas = 0
    agencia
    _cliente

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente
        }
    }

    get cliente(){
        return this._cliente
    }

    _saldo

    get saldo(){
        return this._saldo
    }

    constructor(agencia, cliente){
        this.cliente = cliente
        this.agencia = agencia
        this._saldo = 0
        ContaCorrente.numeroDeContas += 1
    }

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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}