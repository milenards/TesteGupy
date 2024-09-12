function generateSequenceA(n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(1 + 2 * i);
    }
    return sequence;
}

const sequenceA = generateSequenceA(6); // Altere o valor para o número de elementos que deseja
document.getElementById('sequenceA').innerText = sequenceA.join(', ');