class Cliente {
    constructor(){
    }
}

const cliente1 = new Cliente()
cliente1.nome = "Mateus"
cliente1.cpf = 12345678910
cliente1.agencia = 1001
cliente1.saldo = 0

const cliente2 = new Cliente()
cliente2.nome = "Pessoa2"
cliente2.cpf = 10987654321
cliente2.agencia = 1001
cliente2.saldo = 0

console.log(cliente1, cliente2)