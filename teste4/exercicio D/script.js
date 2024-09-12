function generateSequenceD(n) {
    let sequence = [];
    for (let i = 1; i <= n; i++) {
        sequence.push((2 * i) ** 2);
    }
    return sequence;
}

const sequenceD = generateSequenceD(5); // Altere o valor para o número de elementos que deseja
document.getElementById('sequenceD').innerText = sequenceD.join(', ');
