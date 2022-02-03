import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

const cliente1 = new Cliente("Mateus", 12345678910)

const contaCorrenteMateus = new ContaCorrente(cliente1, 1001)
contaCorrenteMateus.depositar(500)
contaCorrenteMateus.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
contaPoupanca.sacar(10)

console.log(contaCorrenteMateus)
console.log(contaPoupanca)