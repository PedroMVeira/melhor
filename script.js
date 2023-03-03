const respostas = ["Sim", "Lanche", "Pedro", "Tudo" ]

function teste() {
    const inputEl = [...document.querySelectorAll('#form input')]
    const inputsRespostas = []
    inputEl.forEach(e => inputsRespostas.push(e.value))

    if(JSON.stringify(respostas) === JSON.stringify(inputsRespostas)){
        alert('Até que você é inteligente')
        window.location.href = './resposta.html'
    }
    else {
        alert('Errou otária')
    }   
}

