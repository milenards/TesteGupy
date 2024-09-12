function generateSequenceE(n) {
    let sequence = [1, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

const sequenceE = generateSequenceE(7); // Altere o valor para o número de elementos que deseja
document.getElementById('sequenceE').innerText = sequenceE.join(', ');