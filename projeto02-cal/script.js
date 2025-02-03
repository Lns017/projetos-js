function adicionarCaracter(num) {
    const display = document.querySelector('input.display').value

    document.querySelector('.display').value = display + num
}

function limparTela() {
    document.querySelector('input.display').value = ''
}

function calcular() {
    const display = document.querySelector('input.display').value

    document.querySelector('input.display').value = eval(display)
}

function inverterNumero() {
    const display = document.querySelector('input.display').value

    document.querySelector('input.display').value = display * -1
}