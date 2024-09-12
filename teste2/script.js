function verificarLetraA() {
    // Obtendo a string digitada
    let inputString = document.getElementById('inputString').value;
    
    // Verificando se contém a letra 'a' ou 'A'
    let quantidade = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === 'a' || inputString[i] === 'A') {
            quantidade++;
        }
    }

    // Exibindo o resultado
    let resultado = document.getElementById('result');
    if (quantidade > 0) {
        resultado.innerHTML = `A letra 'a' aparece ${quantidade} vez(es).`;
    } else {
        resultado.innerHTML = "A letra 'a' não foi encontrada ";
    }
}