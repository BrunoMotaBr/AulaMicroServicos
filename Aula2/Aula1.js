//Declaração de variavel
var aa = "Oi"; // escopo global
let b2 = 5; // escopo local
const texto = "Bruno"; //escopo local, mas constate

console.log(b2);

// funções
function soma(a, b){
    return a + b
}

console.log(soma(3, 5))

//Shift alt + seta pra cima ou pra baixo


var lista = [1,2,3]

console.log(lista)
console.log(lista[0])

lista.push(4)

console.log(lista)

var aluno = {
    nome: "Bruno",
    RGM: "6650232",
    aprovado: true
}

var aluno2 = {
    nome: "Gui",
    RGM: "6651232",
    aprovado: false
}

var lista2 = []

lista2.push(aluno)
lista2.push(aluno2)

console.log(aluno.nome)

lista2.forEach((a) => {
    console.log("Nome: " + a.nome + " RGM: " + a.RGM + " Situação: " + a.aprovado)
})

function soma(a, b){
    return a + b
}
function sub(a, b){
    return a - b
}
function mult(a, b){
    return a * b
}
function div(a, b){
    return a / b
}

const somaArrow = (a, b) => {return a + b}
const subArrow = (a, b) => {return a - b}
const multArrow = (a, b) => {return a * b}
const divArrow = (a, b) => {return a / b}

let a = 5
let b = 2 

console.log(soma(a,b))
console.log(sub(a,b))
console.log(mult(a,b))
console.log(div(a,b))

console.log(somaArrow(a,b))
console.log(subArrow(a,b))
console.log(multArrow(a,b))
console.log(divArrow(a,b))

const carros = [
    {
        modelo: "Uno",
        ano: 2016,
        cor: "Vermelho"
    },
    {
        modelo: "Corsa",
        ano: 1999,
        cor: "Preto"
    },
    {
        modelo: "Onix",
        ano: 2012,
        cor: "Cinza"
    }
]

carros.forEach((a) => {
    console.log(`Modelo: ${a.modelo} - Ano: ${a.ano} - Cor: ${a.cor}`)
})

console.log(carros[0])
console.log(`Modelo segundo carro: ${carros[1].modelo}`)
