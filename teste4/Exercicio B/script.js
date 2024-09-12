function generateSequenceB(n) {
    let sequence = [2];
    for (let i = 1; i < n; i++) {
        sequence.push(sequence[i - 1] * 2);
    }
    return sequence;
}

const sequenceB = generateSequenceB(8); // Altere o valor para o número de elementos que deseja
document.getElementById('sequenceB').innerText = sequenceB.join(', ');