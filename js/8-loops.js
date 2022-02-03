console.log(`\nTrabalhando com loops`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 17
const estaAcompanhado = true
let temPassagemComprada = false
const destino = 'Rio de Janeiro'

console.log("\nDestinos possiveis: ")
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhado

let contador = 0
let destineExiste = false
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        console.log('Destino existe')
        destineExiste = true
        break
    }
    contador++
}

console.log("Destino existe: ", destineExiste)

if(podeComprar && destineExiste){
    console.log("Boa viagem!")
}
else{
    console.log("Desculpe, tivemos um erro!")
}

for(let cont = 0; cont < 3; cont++){
    if(listaDeDestinos[cont] == destino){
        console.log('Destino existe')
        destineExiste = true
        break
    }
}