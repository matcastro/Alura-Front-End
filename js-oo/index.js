import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente("Mateus", 12345678910)
const contaCorrenteMateus = new ContaCorrente(1001, cliente1)

contaCorrenteMateus.depositar(100)
const valorSacado = contaCorrenteMateus.sacar(50)

const conta2 = new ContaCorrente(1001, new Cliente("Pessoa2", 10987654321))

contaCorrenteMateus.transferir(10, conta2)

console.log(valorSacado)
console.log(contaCorrenteMateus, conta2.saldo)

console.log(ContaCorrente.numeroDeContas)