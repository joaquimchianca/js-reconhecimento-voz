window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition
const elementoChute = document.querySelector('#chute')
const recognition = new SpeechRecognition()
recognition.lang = "pt-Br"
recognition.start()

recognition.addEventListener('result', onSpeak )

function onSpeak(e) {
    const numero = e.results[0][0].transcript
    displayNumero(numero)
    ehValido(numero)
}

function displayNumero(n) {

    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box" id="box">${n}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

