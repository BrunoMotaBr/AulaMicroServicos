//document.getElementById('teste').innerHTML = "Olá"
/*
const tipo = {
    A: Symbol('Novo'),
    B: Symbol('Usado')
}

const carros = [
    {
        Nome: 'corsa',
        Cor: 'vermelho',
        Uso: tipo.B
    },
    {
        Nome: 'uno',
        Cor: 'preto',
        Uso: tipo.A
    }
]
// if(carros[0].Uso === tipo.A){
//     alert(`${carros[0].Nome} // Carro Novo // ${carros[0].Cor}`)
// }else if(carros[0].Uso === tipo.B){
//     alert(`${carros[0].Nome} // Carro Novo // ${carros[0].Cor}`)
// }else{
//     alert(`${carros[0].Nome} // Carro Novo // ${carros[0].Cor}`)
// }

//document.getElementById('teste').innerHTML = JSON.stringify(carros[0]) + t;*/

const carros = [
    {
        nome: "Belinda", uso: "Novo"
    },
    {
        nome: "Tesla", uso: "Usado"
    },
    {
        nome: "Uno", uso: "Novo"
    },
    {
        nome: "Fusca", uso: "Usado"
    }
]

let saidaUsado = "";
let saidaNovo = "";

carros.forEach(x => {
    if(x.uso === "Novo"){
        saidaNovo += x.nome + '<br>';
    }else if(x.uso === "Usado"){
        saidaUsado += x.nome + '<br>';
    }
})
document.getElementById("carroNovo").innerHTML += saidaNovo
document.getElementById("carroUsado").innerHTML += saidaUsado