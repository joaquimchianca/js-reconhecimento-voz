function ehValido(chute) {
    const numero = +chute

    if(ehNumero(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return
    }

    if(maiorQue(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}`
        return
    }

    if( numero === numeroSecreto ) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto é ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }

    if(!maiorQue(numero)) {
        console.log('entrou')
        if( numero > numeroSecreto ){
            elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
        } else {
            elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
        }
    }
}



function ehNumero(num) {
    return Number.isNaN(num)
}

function maiorQue(num) {
    return num > maiorValor || num < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})