import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente()
cliente1.nome = "Mateus"
cliente1.cpf = 12345678910

const contaCorrenteMateus = new ContaCorrente()
contaCorrenteMateus.agencia = 1001
contaCorrenteMateus.cliente = cliente1

contaCorrenteMateus.depositar(100)
const valorSacado = contaCorrenteMateus.sacar(50)

const conta2 = new ContaCorrente()
conta2.agencia = 1001
conta2.cliente = new Cliente()
conta2.cliente.nome = "Pessoa2"
conta2.cliente.cpf = 10987654321

contaCorrenteMateus.transferir(10, conta2)

console.log(valorSacado)
console.log(contaCorrenteMateus, conta2)