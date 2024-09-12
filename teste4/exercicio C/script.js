function generateSequenceC(n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(i * i);
    }
    return sequence;
}

const sequenceC = generateSequenceC(8); // Altere o valor para o número de elementos que deseja
document.getElementById('sequenceC').innerText = sequenceC.join(', ');