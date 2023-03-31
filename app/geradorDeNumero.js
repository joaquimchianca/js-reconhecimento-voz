const maiorValor = 1000
const menorValor = 1
const numeroSecreto = geraNumeroAleatorio()

displayNumeros()

function geraNumeroAleatorio() {
    return parseInt( Math.random() * maiorValor + 1)
}

function displayNumeros() {
    const maiorValorCampo = document.querySelector('#maior-valor')
    maiorValorCampo.innerHTML = maiorValor

    const menorValorCampo = document.querySelector('#menor-valor')
    menorValorCampo.innerHTML= menorValor

    console.log(numeroSecreto)

}