import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import { ContaSalario } from './ContaSalario.js'

const cliente1 = new Cliente("Mateus", 12345678910)

const contaCorrente = new ContaCorrente(cliente1, 1001)
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
const contaSalario = new ContaSalario(cliente1)

console.log(contaCorrente)
console.log(contaPoupanca)
console.log(contaSalario)