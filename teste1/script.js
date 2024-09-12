function isFibonacci(num) {
    let a = 0, b = 1, nextTerm = 0;

    if (num === a || num === b) {
        return `${num} pertence à sequência de Fibonacci.`;
    }

    while (nextTerm < num) {
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    if (nextTerm === num) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

function checkFibonacci() {
    let numberInput = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    // Converte o valor de entrada para número
    let number = parseInt(numberInput);

    if (!isNaN(number)) {
        result.textContent = isFibonacci(number);
    } else {
        result.textContent = "Por favor, insira um número válido.";
    }
}