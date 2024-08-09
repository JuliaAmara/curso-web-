// Obtém o elemento de exibição da calculadora
const display = document.getElementById('display');

// Função para limpar a exibição
function clearDisplay() {
    display.innerText = '0'; // Define o texto da exibição para '0'
}

// Função para deletar o último caractere da exibição
function deleteLast() {
    if (display.innerText.length > 1) { // Verifica se há mais de um caractere
        display.innerText = display.innerText.slice(0, -1); // Remove o último caractere
    } else {
        display.innerText = '0'; // Define o texto para '0' se restar apenas um caractere
    }
}

// Função para adicionar um número à exibição
function appendNumber(number) {
    if (display.innerText === '0') { // Verifica se a exibição contém apenas '0'
        display.innerText = number; // Substitui '0' pelo número
    } else {
        display.innerText += number; // Adiciona o número ao final do texto
    }
}

// Função para adicionar um operador à exibição
function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1); // Obtém o último caractere da exibição
    if (!['+', '-', '*', '/'].includes(lastChar)) { // Verifica se o último caractere não é um operador
        display.innerText += operator; // Adiciona o operador ao final do texto
    }
}

// Função para calcular o resultado da expressão na exibição
function calculate() {
    try {
        display.innerText = eval(display.innerText); // Avalia a expressão e atualiza a exibição com o resultado
    } catch (e) {
        display.innerText = 'Error'; // Define o texto para 'Error' se houver um erro na avaliação
    }
}
