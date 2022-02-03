import { Cliente } from './Cliente.js'
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor("Mateus", 10000, 12345678910)
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Mateus", 5000, 12345678910)
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 78945612379, "456")

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456")

console.log(clienteEstaLogado, gerenteEstaLogado, diretorEstaLogado)